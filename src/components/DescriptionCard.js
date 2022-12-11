import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Texthandler from './decription';
import Cardd from './JoinCreateCard';

const Descriptioncard = () => {
    return(
        <View style={styles.container}>
            <Texthandler/> 
            
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop:10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#D4D4D4'
    }
})
export default Descriptioncard