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

const CardSignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <TouchableOpacity
          style={[styles.buttonSignIn, styles.shadowProp]}
          onPress={() => navigation.navigate("Home")}
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
    width: 350,
    height: 300,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
  },
  buttonSignIn: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    borderRadius: 100,
    marginHorizontal: 20,
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
		marginBottom:50
  },
});
