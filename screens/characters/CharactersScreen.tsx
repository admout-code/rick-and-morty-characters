import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Result } from "../../entities";
import { getCharacters } from "../../services/getCharacters";
import { isSuccessResponse } from "../../services/response";
import Button from "../../ui-kit/Button";
import Flex from "../../ui-kit/Flex";
import CharacterCard from "./card/CharacterCard";
import { charactersScreenStyles } from "./charactersScreenStyles";

function CharactersScreen() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<Result>();

    useEffect(() => {
        getCharacters(page).then((res) => {
            if (isSuccessResponse(res)) setData(res.data);
        });
    }, [page]);

    if (!data) return <Text>Loading...</Text>;

    return (
        <ScrollView style={charactersScreenStyles.container}>
            <Flex direction="column">
                {data.results.map((character) => (
                    <CharacterCard key={character.id} onPress={() => {}} character={character} />
                ))}
            </Flex>
            <Button onPress={() => setPage((prev) => prev + 1)}>Next</Button>
        </ScrollView>
    );
}

export default CharactersScreen;
