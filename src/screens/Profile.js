import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeStackHeader from "../components/HomeStackHeader";
import { ProfileContainer, ProfileName } from "../components/ProfilePhoto";

const Profile = () => {
  return (
    <View style={styles.container}>
      <HomeStackHeader />
      <View style={styles.profileWrapper}>
        <ProfileContainer
          imgURL={
            "https://preview.redd.it/loz0cjh7ubb71.png?auto=webp&s=eb157556c0217c8b2e313c844b7b7125fa1d6222"
          }
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  profileWrapper: {
    flex: 1,
    alignItems: "center",
  },
});
