import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import GradientAnimated from './App/Components/Molecules/GradientAnimated';
import GradientAnimatedQuick from './App/Components/Molecules/GradientAnimatedQuick';

export default function App() {
	const [coords, setCoords] = useState({ x: 0.2, y: 0 })
	const handleTouch = (e) => {
		console.log(e.location, 'TOUCH')
	}
	return (
		<View style={ styles.container }>

				<GradientAnimatedQuick />



			<StatusBar style="auto" />

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
