import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const RoomCard = ({ id, title, imgURL }) => {
  return (
    <TouchableOpacity>
      <View style={styles.cardWrapper}>
        <View>
          <Image
            source={{ uri: imgURL }}
            style={{
              width: 300,
              height: 150,
              resizeMode: "stretch",
            }}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <StatusBar style="light" />
      </View>
    </TouchableOpacity>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: "skyblue",
    borderRadius: 20,
    marginBottom: 40,
    overflow: "hidden",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    marginStart: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});
