import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "./entities/navigation";
import CharacterInfoScreen from "./screens/character/CharacterInfoScreen";
import CharactersScreen from "./screens/characters/CharactersScreen";
import HomeScreen from "./screens/home/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    options={{
                        headerStyle: styles.headerBackground,
                        headerTitleStyle: styles.headerTitle,
                        headerTintColor: "white",
                        title: "Boom! Big reveal!"
                    }}
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={{
                        title: "Characters",
                        headerStyle: styles.headerBackground,
                        headerTitleStyle: styles.headerTitle,
                        headerTintColor: "white",
                    }}
                    name="CharactersList"
                    component={CharactersScreen}
                />
                <Stack.Screen
                    options={({ route }) => ({
                        headerStyle: styles.headerBackground,
                        headerTitleStyle: styles.headerTitle,
                        headerTintColor: "white",
                        title: route.params.characterName,
                    })}
                    name="Character"
                    component={CharacterInfoScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerBackground: {
        backgroundColor: "#273236",
    },
    headerTitle: {
        color: "white",
    },
});
