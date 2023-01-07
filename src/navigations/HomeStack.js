import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";
import BottomNav from "./BottomNav";

export const BotNav = () => {
  return <BottomNav />;
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BotNav"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="BotNav" component={BotNav} />
    </Stack.Navigator>
  );
};

export default HomeStack;
