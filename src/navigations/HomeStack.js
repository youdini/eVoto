import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Settings from "../screens/Settings";
import BottomNav from "./BottomNav";
import Room from "../screens/Room";
import CreateRoom from "../screens/CreateRoom";
import JoinRoom from "../screens/JoinRoom";
import UpdateProfile from "../screens/UpdateProfile";

export const BotNav = () => {
  return <BottomNav />;
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BotNav"
      screenOptions={{ animation: "slide_from_bottom" }}
    >
      <Stack.Screen
        name="CreateRoom"
        component={CreateRoom}
        options={{
          title: "Create Room",
        }}
      />
      <Stack.Screen name="JoinRoom" component={JoinRoom} />

      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{ headerTitle: "Update Profile" }}
      />

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
