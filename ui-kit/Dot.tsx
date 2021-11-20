import React from "react";
import { View, StyleSheet } from "react-native";

interface IProps {
    status: "Alive" | "Dead" | "unknown";
}

function Dot({ status }: IProps) {
    const getColor = (status: "Alive" | "Dead" | "unknown") => {
        switch (status) {
            case "Alive":
                return "#55CC44";
            case "Dead":
                return "#D63D2E";
            default:
                return "#9E9E9E";
        }
    };

    const styles = StyleSheet.create({
        root: {
            width: 8,
            height: 8,
            borderRadius: 50,
            backgroundColor: getColor(status),
            marginRight: 4,
        },
    });

    return <View style={styles.root} />;
}

export default Dot;
