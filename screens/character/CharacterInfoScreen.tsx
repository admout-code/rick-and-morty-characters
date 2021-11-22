import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Character } from "../../entities/character";
import { RootStackParamList } from "../../entities/navigation";
import { getSimpleCharacter } from "../../services/getSimpleCharacter";
import { isSuccessResponse } from "../../services/response";
import Flex from "../../ui-kit/Flex";
import Loading from "../../ui-kit/Loading";
import CardInfo from "../characters/card/CardInfo";
import { characterInfoStyles } from "./characterInfoStyles";
import Episodes from "./Episodes";

type Props = NativeStackScreenProps<RootStackParamList, "Character">;

function CharacterInfoScreen({ route }: Props) {
    const { characterId } = route.params;
    const [character, setCharacter] = useState<Character>();
    const styles = characterInfoStyles;

    useEffect(() => {
        getSimpleCharacter(characterId).then((res) => {
            if (isSuccessResponse(res)) setCharacter(res.data);
        });
    }, []);

    if (!character) return <Loading />;

    return (
        <Flex direction="column" style={styles.container}>
            <Flex style={styles.topInfo} direction="row">
                <Image style={styles.image} source={{ uri: character.image }} />
                <CardInfo character={character} />
            </Flex>
            <Episodes episodesUrl={character.episode} />
        </Flex>
    );
}

export default React.memo(CharacterInfoScreen);
