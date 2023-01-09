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
  const { roomTitle } = route.params;
  const { roomPhoto } = route.params;
  const imgUrl = JSON.stringify(roomPhoto);
  return (
    <SafeAreaView>
      <View>
        <Image
          source={{ uri: imgUrl }}
          style={{
            width: 200,
            height: 100,
            resizeMode: "cover",
          }}
        />
      </View>
      <Text style={styles.title}>{JSON.stringify(roomTitle)}</Text>
    </SafeAreaView>
  );
};

export default Room;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
