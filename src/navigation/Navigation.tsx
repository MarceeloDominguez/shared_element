import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: {};
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
