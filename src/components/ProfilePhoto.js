import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ProfileName = ({ firstName, lastName, middleInitial }) => {
  return (
    <Text style={styles.name}>
      {lastName}, {firstName} {middleInitial}
    </Text>
  );
};

export const ProfileContainer = () => {
  return (
    <View>
      <View style={[styles.profile, styles.shadowProp]}></View>
      <ProfileName
        firstName={"John Lee"}
        lastName={"Ingua"}
        middleInitial={"M."}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "#D9D9D9",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    padding: 10,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  shadowProp: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 9,
  },
});
