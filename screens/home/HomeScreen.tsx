import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import Button from "../../ui-kit/Button";
import { homeStyles } from "./homeStyles";

function HomeScreen() {
    const styles = homeStyles;
    return (
        <View style={styles.container}>
            <Button onPress={() => {}}>Lets Start</Button>
        </View>
    );
}

export default HomeScreen;
