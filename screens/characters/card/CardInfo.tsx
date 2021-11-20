import React from "react";
import { Character } from "../../../entities/character";
import Flex from "../../../ui-kit/Flex";
import { Text } from "react-native";
import { cardStyles } from "./cardStyles";
import Dot from "../../../ui-kit/Dot";

interface IProps {
    character: Character;
}

function CardInfo({ character }: IProps) {
    return (
        <Flex style={cardStyles.infoContainer} direction="column">
            <Flex direction="column">
                <Text numberOfLines={1} style={cardStyles.name}>
                    {character.name}
                </Text>
                <Flex style={cardStyles.statusContainer} direction="row">
                    <Dot status={character.status} />
                    <Text style={cardStyles.status}>
                        {character.status} - {character.species}
                    </Text>
                </Flex>
            </Flex>
            <Flex direction="column">
                <Text style={cardStyles.locationTitle}>Last known location:</Text>
                <Text style={cardStyles.location}>{character.location.name}</Text>
            </Flex>
            <Flex direction="column">
                <Text style={cardStyles.locationTitle}>First seen in:</Text>
                <Text style={cardStyles.location}>{character.origin.name}</Text>
            </Flex>
        </Flex>
    );
}

export default CardInfo;
