import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React from "react";

const Room = ({ route, navigation }) => {
  const { roomTitle, roomPhoto } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{ uri: roomPhoto }}
          style={{
            width: 400,
            height: 200,
            resizeMode: "stretch",
          }}
        />
      </View>
      <Text style={styles.title}>{roomTitle}</Text>
    </SafeAreaView>
  );
};

export default Room;

const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
});
