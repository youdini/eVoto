import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CreateJoinButton from "./CreateJoinButton";

const CreateJoinCard = () => {
  return (
    <View style={styles.container}>
      <CreateJoinButton name={"Join Room"} navigate={"JoinRoom"} />
      <Text style={styles.text}>OR</Text>
      <CreateJoinButton name={"Create Room"} navigate={"CreateRoom"} />
    </View>
  );
};

export default CreateJoinCard;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    borderRadius: 30,
    backgroundColor: "#E4E4E4",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  text: {
    marginVertical: 20,
  },
});
