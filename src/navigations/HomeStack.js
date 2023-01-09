import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Settings from "../screens/Settings";
import BottomNav from "./BottomNav";
import Room from "../screens/Room";

export const BotNav = () => {
  return <BottomNav />;
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="BotNav">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="BotNav"
        component={BotNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
};

export default HomeStack;
