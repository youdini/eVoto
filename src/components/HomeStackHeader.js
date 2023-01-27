import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeStackHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Option Button */}
      <TouchableOpacity
        style={styles.buttonBG}
        onPress={() => navigation.navigate("Settings")}
      >
        <Ionicons name="cog" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeStackHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonBG: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "rgba(240, 240, 240, 0.98)",
    marginHorizontal: 20,
    marginTop: 30,
  },
});
