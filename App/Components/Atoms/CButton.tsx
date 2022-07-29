import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
	onPress: () => void
}
const CButton: React.FC<Props> = ({onPress, children}) => {
  return (
	  <Pressable onPress={onPress}>
	 <View style={styles.button}>
		<Text>{children}</Text>
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