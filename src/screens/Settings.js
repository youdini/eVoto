import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import SettingsOption from "../components/SettingsOption";

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SettingsOption
        iconName={"lock-closed-outline"}
        label={"Change Password"}
        size={24}
        navigate={""}
      />
      <SettingsOption
        iconName={"person-circle-outline"}
        label={"Update Profile"}
        navigate={""}
        size={30}
      />
      <SettingsOption
        iconName={"information-circle-outline"}
        label={"About Us"}
        navigate={""}
        size={30}
      />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
