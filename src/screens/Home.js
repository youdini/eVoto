import React from "react";
import { View, StyleSheet } from "react-native";
import { ProfileContainer } from "../components/ProfilePhoto";
import CreateJoinCard from "../components/CreateJoinCard";

import HomeStackHeader from "../components/HomeStackHeader";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header (Back and Option Button) */}
      <HomeStackHeader />
      <View style={styles.profile}>
        <ProfileContainer
          imgURL={
            "https://preview.redd.it/loz0cjh7ubb71.png?auto=webp&s=eb157556c0217c8b2e313c844b7b7125fa1d6222"
          }
        />
      </View>
      <CreateJoinCard />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },

  profile: {
    justifyContent: "center",
    alignItems: "center",
  },
});
