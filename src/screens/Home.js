import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Back from "../assets/back-icon/back";
import BottomNavigation from "../components/BottomNavigation";
import { ProfileContainer } from "../components/ProfilePhoto";
import CreateJoinCard from "../components/CreateJoinCard";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Back width={30} height={30} />
      </TouchableOpacity>
      <View style={styles.profile}>
        <ProfileContainer />
      </View>
      <View>
        <CreateJoinCard/>
      </View>
      <View style={styles.bottomNav}>
        <BottomNavigation />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#D9D9D9",
    marginStart: 10,
  },
  bottomNav: {
    flex: 1,
    justifyContent: "flex-end",
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
  },
});
