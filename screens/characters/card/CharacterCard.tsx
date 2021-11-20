import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Character } from "../../../entities/entities";
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
        <TouchableOpacity onPress={onPress}>
            <Flex style={cardStyles.cardContainer} direction="row">
                <Image style={cardStyles.image} source={{ uri: character.image }} />
                <CardInfo character={character} />
            </Flex>
        </TouchableOpacity>
    );
}

export default CharacterCard;
