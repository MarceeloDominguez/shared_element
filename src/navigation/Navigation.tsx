import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Data } from "../interfaces/dataInterface";

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Data;
};

const Stack = createSharedElementStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTransparent: true, headerTitle: "" }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
