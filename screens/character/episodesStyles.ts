import { StyleSheet } from "react-native";

export const episodesStyles = StyleSheet.create({
    container: {
        maxHeight: "70%",
        marginHorizontal: 16,
        marginBottom: 16,
    },
    scrollView: {
        backgroundColor: "#3c3e44",
        borderRadius: 8,
    },
    title: {
        color: "white",
        fontSize: 20,
        marginBottom: 10,
    },
    episode: {
        marginHorizontal: 8,
    },
    episodeName: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 10,
    },
});
