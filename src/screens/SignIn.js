import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import CardSignIn from "../components/SignInCard";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/logo_ccc.png")}
        />
      </View>
      <CardSignIn />
      <StatusBar hidden={true} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    justifyContent: "flex-start",
  },
});
