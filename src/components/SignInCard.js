import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/logo/logo";
import GoogleIcon from "../assets/googleicon/GoogleIcon";

const CardSignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.google}>
          <GoogleIcon />
        </View>
        <TouchableOpacity
          style={[styles.buttonSignIn, styles.shadowProp]}
          onPress={() => navigation.navigate("HomeStack")}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Sign in with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardSignIn;

const styles = StyleSheet.create({
  cardWrapper: {
    alignContent: "center",
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
  },
  buttonSignIn: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    borderRadius: 100,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  shadowProp: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  logo: {
    alignItems: "center",
    marginVertical: 30,
  },
  google: {
    justifyContent: "center",
    alignItems: "center",
  },
});
