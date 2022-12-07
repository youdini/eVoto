import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateRoom from './CreateRoomButton';
import JoinBtn from './JoinRoomButton';

const CardHome = () => {
    return (
        <View style={styles.container}>
          <JoinBtn/>
          <Text style={styles.text}>OR</Text>
          <CreateRoom/>
        </View>


    )
}
export default CardHome

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 30,
        backgroundColor: '#D4D4D4'
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
    
})