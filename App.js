import React from "react";
import { View, StyleSheet } from "react-native";
import CardSignIn from "./src/components/SignInCard";
import Navigation from "./src/navigations/Navigations";

const App = () => {
  return <Navigation />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
