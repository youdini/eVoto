import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/logo_ccc.png')}/>
      </View>
    </View>
  );
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  }
})
