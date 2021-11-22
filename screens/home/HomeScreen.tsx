import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { RootStackParamList } from "../../entities/navigation";
import Button from "../../ui-kit/Button";
import { homeStyles } from "./homeStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ navigation }: Props) {
    const styles = homeStyles;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("CharactersList")}>
                <Image style={styles.image} source={require("../../assets/rick_and_morty-min.png")} />
                <Image style={styles.continueBtn} source={require("../../assets/continue_btn-min.png")} />
            </TouchableOpacity>
        </View>
    );
}

export default React.memo(HomeScreen);
