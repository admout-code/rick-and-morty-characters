import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

function Loading() {
    return (
        <View style={styles.root}>
            <ActivityIndicator size="large" color="lime" />
        </View>
    );
}

export default Loading;

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#24282F",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});
