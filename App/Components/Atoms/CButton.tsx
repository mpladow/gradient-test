import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CButton = (props) => {
  return (
	  <Pressable onPress={props.onPress}>
	 <View style={styles.button}>
		<Text>{props.children}</Text>
	 </View>
	 </Pressable>
  )
}

export default CButton

const styles = StyleSheet.create({
button: {
	padding: 6,
	borderRadius: 4,
	border: 1,
	borderColor: '#ddd'
}
})