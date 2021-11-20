import React from "react";
import { View, StyleSheet } from "react-native";

interface IProps {
    children: React.ReactNode;
    direction: "row" | "column";
    style?: object;
}

function Flex({ direction, children, style }: IProps) {
    const defaultStyles = StyleSheet.create({
        root: {
            display: "flex",
            flexDirection: direction,
        },
    });

    return <View style={[defaultStyles.root, style]}>{children}</View>;
}

export default Flex;
