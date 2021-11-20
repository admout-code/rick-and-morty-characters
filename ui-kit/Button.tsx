import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IProps {
    children: React.ReactText;
    onPress: () => void;
}

function Button({ children, onPress }: IProps) {
    return (
        <TouchableOpacity style={styles.root} onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "lime",
        padding: 8,
        borderRadius: 8,
    },
});
export default Button;
