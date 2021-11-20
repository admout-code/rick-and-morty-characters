import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CharactersScreen from "./screens/characters/CharactersScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* <StatusBar /> */}
            <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                <Stack.Screen name="List" component={CharactersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
