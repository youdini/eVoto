import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateJoinButton from './CreateJoinButton';

const CreateJoinCard = () => {
  return (
    <View style={styles.container}>
      <CreateJoinButton name={'Join Room'}/>
      <Text style={styles.text}>OR</Text>
      <CreateJoinButton name={'Create Room'}/>
    </View>
  )
}

export default CreateJoinCard

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#E4E4E4',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 20,
    width:'100%'
  },
  text: {
    marginVertical:20
  }
})