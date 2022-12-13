import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ConfirmButton = () => {
return (
<TouchableOpacity style={styles.button}>
<Text>Confirm</Text>
</TouchableOpacity>
);
}

export default ConfirmButton

const styles = StyleSheet.create({
	button: {
		borderRadius: 100,
		backgroundColor: "#A5EEAC",
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 10
	}
});
