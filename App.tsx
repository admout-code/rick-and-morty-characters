import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CharacterInfoScreen from "./screens/character/CharacterInfoScreen";
import CharactersScreen from "./screens/characters/CharactersScreen";
import HomeScreen from "./screens/home/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen options={{ title: "Characters" }} name="CharactersList" component={CharactersScreen} />
                <Stack.Screen name="Character" component={CharacterInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
