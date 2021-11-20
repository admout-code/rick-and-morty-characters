import React from "react";
import { View } from "react-native";

interface IProps {
    horizontal?: boolean;
    vertical?: boolean;
}
function Divider({ horizontal = true, vertical = false }: IProps) {
    const styles = StyleSheet.create({
        root: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // marginVertical: horizontal ? 10 : 0,
            // marginHorizontal: vertical ? 10 : 0,
        },
        divider: {
            width: horizontal ? "100%" : 1,
            height: vertical ? "100%" : 1,
            backgroundColor: "#24282F",
        },
    });

    return (
        <View style={styles.root}>
            <View style={styles.divider} />
        </View>
    );
}

export default Divider;

import { StyleSheet } from "react-native";
