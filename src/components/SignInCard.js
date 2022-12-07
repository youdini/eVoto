import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";

const CardSignIn = () => {
	return (
		<View style={styles.cardWrapper}>
			<TouchableOpacity style={[styles.buttonSignIn, styles.shadowProp]}>
				<Text style={{
					textAlign:'center'
				}}>Sign in with Google</Text>
			</TouchableOpacity>
		</View>
	)
}

export default CardSignIn

const styles = StyleSheet.create({
	cardWrapper: {
		width:350,
		height:300,
		alignContent:'center',
		justifyContent:'center',
		borderRadius:20,
		backgroundColor:'#EFEFEF',
	},
	buttonSignIn: {
		paddingVertical:20,
		paddingHorizontal:10,
		backgroundColor:'#ffffff',
		borderRadius:100,
		marginHorizontal:20,		
	},
	shadowProp: {
		shadowOffset:{width:5, height: 5,},
		shadowColor:'black',
		shadowOpacity:0.25,
		shadowRadius:3,
		elevation:5,
	}
})