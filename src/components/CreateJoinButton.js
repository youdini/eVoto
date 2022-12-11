import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const CreateJoinButton = ({name}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  ); 
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#063BD4',
    padding:30,
    borderRadius: 100,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10,
    width:'100%'
  },
  text: {
    color: 'white',
  }
});

export default CreateJoinButton