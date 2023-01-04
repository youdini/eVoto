import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Room = () => {
  return (
    <View style={styles.container}>
      <Text>Room</Text>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
