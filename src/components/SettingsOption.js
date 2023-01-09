import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SettingsOption = ({ iconName, label, navigate, size }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper}>
      <Text style={styles.label}>{label}</Text>
      <Ionicons name={iconName} size={size} color="black" />
    </TouchableOpacity>
  );
};

export default SettingsOption;

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  label: {
    marginStart: 10,
  },
});
