import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../entities/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Character">;

function CharacterInfoScreen({ route }: Props) {
    const { characterId } = route.params;
    return (
        <View>
            <Text>Character id: {characterId}</Text>
        </View>
    );
}

export default React.memo(CharacterInfoScreen);
