import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";
import CardSignIn from "../components/SignIn/SignInCard";

const SignIn = () => {
  return (
    <View style={StyleSheet.container}>
      <View>
        <CardSignIn/>
      </View>
    </View>
  )
}

export default SignIn

