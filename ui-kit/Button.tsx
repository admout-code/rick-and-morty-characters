import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface IProps {
    children: React.ReactText;
    onPress: () => void;
    variant?: "contained" | "outlined" | "text";
    color?: string;
    style?: object;
    disabled?: boolean;
}

const getStyles = (variant: "contained" | "outlined" | "text", color: string) => {
    return {
        backgroundColor: variant === "contained" ? color : "transparent",
        color: variant === "text" || variant === "outlined" ? color : "black",
        border: variant === "outlined" ? color : "transparent",
    };
};

function Button({ children, onPress, variant = "contained", style, color = "white", disabled = false }: IProps) {
    const styles = StyleSheet.create({
        root: {
            backgroundColor: getStyles(variant, color).backgroundColor,
            borderColor: getStyles(variant, color).border,
            borderWidth: 1,
            padding: 8,
            borderRadius: 8,
        },
        btnName: {
            color: getStyles(variant, color).color,
            fontSize: 18,
        },
        disabledRoot: {
            backgroundColor: getStyles(variant, "#3c3e44").backgroundColor,
            borderColor: getStyles(variant, "#3c3e44").border,
            borderWidth: 1,
            padding: 8,
            borderRadius: 8,
        },
        disabledName: {
            color: "#3c3e44",
            fontSize: 18,
        },
    });

    return (
        <View>
            {disabled ? (
                <View style={[styles.disabledRoot, style]}>
                    <Text style={styles.disabledName}>{children}</Text>
                </View>
            ) : (
                <TouchableOpacity style={[styles.root, style]} onPress={onPress}>
                    <Text style={styles.btnName}>{children}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Button;
