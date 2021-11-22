import { StyleSheet } from "react-native";

export const charactersScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: "#24282F",
    },
    scrollViewContainer: {
        marginBottom: 35,
    },
    paginationContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "#24282F",
        bottom: 0,
        width: "100%",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderWidth: 1,
        borderTopColor: "#3c3e44",
        borderRightColor: "#3c3e44",
        borderLeftColor: "#3c3e44",
    },
    paginationPage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        width: 75,
        fontSize: 18,
    },
});
