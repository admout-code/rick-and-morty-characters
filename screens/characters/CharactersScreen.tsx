import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Result } from "../../entities/character";
import { RootStackParamList } from "../../entities/navigation";
import { getCharacters } from "../../services/getCharacters";
import { isSuccessResponse } from "../../services/response";
import Button from "../../ui-kit/Button";
import Flex from "../../ui-kit/Flex";
import Loading from "../../ui-kit/Loading";
import CharacterCard from "./card/CharacterCard";
import { charactersScreenStyles } from "./charactersScreenStyles";

type Props = NativeStackScreenProps<RootStackParamList, "CharactersList">;

function CharactersScreen({ navigation }: Props) {
    const styles = charactersScreenStyles;
    const scrollRef = useRef<ScrollView>(null);
    const [page, setPage] = useState(1);
    const [data, setData] = useState<Result>();

    useEffect(() => {
        getCharacters(page).then((res) => {
            if (isSuccessResponse(res)) setData(res.data);
        });
    }, [page]);

    const goNextPage = useCallback(() => {
        if (page === data?.info.pages) return;
        setPage((prev) => prev + 1);
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }, [data, page]);

    const goPreviousPage = useCallback(() => {
        if (page === 1) return;
        setPage((prev) => prev - 1);
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }, [page]);

    if (!data) return <Loading />;

    return (
        <View style={styles.container}>
            <ScrollView ref={scrollRef} style={styles.scrollViewContainer}>
                <Flex direction="column">
                    {data.results.map((character) => (
                        <CharacterCard
                            key={character.id}
                            onPress={() => {
                                navigation.navigate("Character", {
                                    characterId: character.id,
                                    characterName: character.name,
                                });
                            }}
                            character={character}
                        />
                    ))}
                </Flex>
            </ScrollView>
            <Flex style={styles.paginationContainer} direction="row">
                <Button disabled={page === 1} variant="text" onPress={goPreviousPage}>
                    Previous
                </Button>
                <Text style={styles.paginationPage}>Page: {page}</Text>
                <Button disabled={page === data.info.pages} variant="text" onPress={goNextPage}>
                    Next
                </Button>
            </Flex>
        </View>
    );
}

export default CharactersScreen;
