import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#3c3e44",
        marginVertical: 8,
        marginHorizontal: 4,
        borderRadius: 8,
    },
    image: {
        width: 150,
        height: 150,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },
    infoContainer: {
        padding: 8,
        justifyContent: "space-between",
    },
    name: {
        color: "white",
        fontSize: 18,
        fontWeight: "700",
        overflow: "hidden",
    },
    statusContainer: {
        alignItems: "center",
    },
    status: {
        color: "white",
        fontWeight: "700",
    },
    locationTitle: {
        color: "#9E9E9E",
        fontWeight: "700",
    },
    location: {
        color: "white",
        fontSize: 14,
    },
});
