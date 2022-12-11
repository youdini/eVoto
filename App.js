import React from "react";
import { View, StyleSheet } from "react-native";
import CardSignIn from "./src/components/SignInCard";
import SignIn from "./src/screens/SignIn";

const App = () => {
  return (
    <View style={styles.container}>
      <SignIn/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  }
})
