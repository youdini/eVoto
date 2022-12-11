import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='SignIn'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation