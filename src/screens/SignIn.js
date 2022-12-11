import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";
import CardSignIn from "../components/SignInCard";
import CreateJoinCard from "../components/CreateJoinCard";

const SignIn = () => {
  return (
    <View style={StyleSheet.container}>
      <View>
        <CreateJoinCard/>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
  }
})

