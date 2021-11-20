import React from "react";
import { Image } from "react-native";
import { Character } from "../../../entities";
import Dot from "../../../ui-kit/Dot";
import Flex from "../../../ui-kit/Flex";
import CardInfo from "./CardInfo";
import { cardStyles } from "./cardStyles";

interface IProps {
    character: Character;
    onPress: () => void;
}

function CharacterCard({ character, onPress }: IProps) {
    return (
        <Flex style={cardStyles.cardContainer} direction="row">
            <Image style={cardStyles.image} source={{ uri: character.image }} />
            <CardInfo character={character} />
        </Flex>
    );
}

export default CharacterCard;
