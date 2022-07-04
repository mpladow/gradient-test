import {
	Dimensions,
	NativeTouchEvent,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { gradient_colours } from '../../constants/theme';

let timeout = undefined;

const GradientAnimatedQuick = () => {
	const COLOURS = ['#00BF6F', '#FDDA25', '#71DBD4', '#00BF6F'];

	const GRADIENT_POINTS = [0, 0.5, 1, 1];
	const MOVEMENT = GRADIENT_POINTS[1] / 360; // speed of movement
	const SPEED = 30; // updates every 30ms

	// to be used for dynamic directio of gradient
	const [startCoord, setStartCoord] = useState({ x: 0.1, y: 0 });
	const [endCoord, setEndCoord] = useState({ x: 0.8, y: 1 });

	
	// set default state
	const [gradientOptions, setGradientOptions] = useState({
		colours: COLOURS,
		gradientLocations: GRADIENT_POINTS,
		start: startCoord,
		end: endCoord,
	});

	// need to use useRef as we will be using setTimeouts to move the gradient along.
	// using useRef will allow us to access the updated state

	const gradientOptionsRef = useRef(gradientOptions);
	gradientOptionsRef.current = gradientOptions;

	const startRef = useRef(startCoord);

	useEffect(() => {
		animateGradient();
	}, []);

	let animateGradient = () => {
		if (
			gradientOptionsRef.current.gradientLocations[1] -
				MOVEMENT <=
			0
		) {
			// Shift colours and reset locations
			console.log(gradientOptionsRef.current.colours);
			let gradientColors = [
				...gradientOptionsRef.current.colours,
			];
			let gradientBeingReplaced = gradientColors[1];
			gradientColors.shift();
			gradientColors.push(gradientBeingReplaced);
			// console.log(gradientColors, 'COLOURS')

			let newStartX = gradientOptionsRef.current.start.x;

			setGradientOptions({
				colours: gradientColors,
				gradientLocations: GRADIENT_POINTS,
				start: { x: newStartX, y: 0 },
				end: endCoord,
			});
		} else {
			let updatedLocations =
				gradientOptionsRef.current.gradientLocations.map(
					(item, index) => {
						if (
							index ===
							gradientOptionsRef
								.current
								.gradientLocations
								.length -
								1
						) {
							return 1;
						}

						return parseFloat(
							Math.max(
								0,
								item - MOVEMENT
							).toFixed(4)
						);
					}
				);

			setGradientOptions({
				colours: [
					...gradientOptionsRef.current.colours,
				],
				gradientLocations: updatedLocations,
				start: startCoord,
				end: endCoord,
			});
		}

		timeout = setTimeout(animateGradient, SPEED);
	};

	return (
		<LinearGradient
			style={{ height: '100%', width: '100%' }}
			colors={gradientOptions.colours}
			locations={gradientOptions.gradientLocations}
			start={gradientOptions.start}
			end={gradientOptions.end}
		/>
	);
};

export default GradientAnimatedQuick;

const styles = StyleSheet.create({});
