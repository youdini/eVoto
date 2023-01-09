import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const RoomCard = ({ id, title, imgURL }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Room", {
          roomTitle: title,
          roomPhoto: imgURL,
        })
      }
    >
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
