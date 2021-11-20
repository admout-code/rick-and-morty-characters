import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../entities/navigation";
import Button from "../../ui-kit/Button";
import { homeStyles } from "./homeStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ navigation }: Props) {
    const styles = homeStyles;
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate("CharactersList")}>Wubba lubba dub dub!</Button>
        </View>
    );
}

export default React.memo(HomeScreen);
