import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottomNavigation = () => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navButton} />
    </View>
  )
}

const styles = StyleSheet.create ({
  bottomNav:{
    backgroundColor:'#E9E9E9',
    padding:20,
  },
  navButton: {
    alignSelf:'flex-start',
    borderRadius:100,
    backgroundColor: '#D9D9D9',
    padding:30,
  }
})

export default BottomNavigation