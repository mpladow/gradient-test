import {
	StyleSheet,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

let timeout = undefined;

const GradientAnimatedQuick = () => {
	//CONST
	const COLOURS = ['#00BF6F', '#FDDA25', '#71DBD4', '#00BF6F'];
	const GRADIENT_POINTS = [0, 0.5, 1, 1];
	const MOVEMENT = GRADIENT_POINTS[1] / 460; // speed of movement
	const SPEED = 30; // updates every 30ms

	const START_COORD = { x: 0.4, y: 0 };
	const END_COORD = { x: 0.6, y: 1 };
	// to be used for dynamic directio of gradient

	let ascXVar = true;
	const [ascX, setAscX] = useState(true);
	// set default state
	const [gradientOptions, setGradientOptions] = useState({
		colours: COLOURS,
		gradientLocations: GRADIENT_POINTS,
		start: START_COORD,
		end: END_COORD,
	});

	useEffect(() => {
		// animateGradientWithState();
		animateGradient();
	}, []);

	// can't use state as the state, try using useRef
	// let animateGradientWithState = () => {
	// 	if (
	// 		gradientOptions.gradientLocations[1] -
	// 			MOVEMENT <=
	// 		0
	// 	) {
	// 		// Shift colours and reset locations
	// 		console.log(gradientOptions.colours);
	// 		let gradientColors = [...gradientOptions.colours];
	// 		let gradientBeingReplaced = gradientColors[1];
	// 		gradientColors.shift();
	// 		gradientColors.push(gradientBeingReplaced);
	// 		// console.log(gradientColors, 'COLOURS')

	// 		// added code to prepare for dynamically setting direction
	// 		let newStartX = gradientOptions.start.x;

	// 		setGradientOptions({
	// 			colours: gradientColors,
	// 			gradientLocations: GRADIENT_POINTS,
	// 			start: { x: newStartX, y: 0 },
	// 			end: endCoord,
	// 		});
	// 	} else {
	// 		let updatedLocations =
	// 			gradientOptions.gradientLocations.map(
	// 				(item, index) => {
	// 					if (
	// 						index ===
	// 						gradientOptions
	// 							.gradientLocations
	// 							.length -
	// 							1
	// 					) {
	// 						return 1;
	// 					}

	// 					return parseFloat(
	// 						Math.max(
	// 							0,
	// 							item - MOVEMENT
	// 						).toFixed(4)
	// 					);
	// 				}
	// 			);

	// 		setGradientOptions({
	// 			colours: [...gradientOptions.colours],
	// 			gradientLocations: updatedLocations,
	// 			start: startCoord,
	// 			end: endCoord,
	// 		});
	// 	}

	// 	timeout = setTimeout(animateGradientWithState, SPEED);
	// };

	// using useRef will allow us use the persistent state prior to rerendering
	const gradientOptionsRef = useRef(gradientOptions);
	gradientOptionsRef.current = gradientOptions;

	let animateGradient = () => {
		if (
			gradientOptionsRef.current.gradientLocations[1] -
				MOVEMENT <=
			0
		) {
			// Shift colours and reset locations
			const directionShiftSpeed = 0.1;
			console.log(directionShiftSpeed);
			console.log(gradientOptionsRef.current.colours);
			let gradientColors = [
				...gradientOptionsRef.current.colours,
			];
			let gradientBeingReplaced = gradientColors[1];
			gradientColors.shift();
			gradientColors.push(gradientBeingReplaced);
			// console.log(gradientColors, 'COLOURS')

			// dynamic direction change - WIP, still buggy
			console.log('updating direction ');
			console.log(gradientOptionsRef.current.start);
			console.log(gradientOptionsRef.current.end);

			let start = gradientOptionsRef.current.start;
			let startX = start.x + directionShiftSpeed;
			startX =
				ascXVar == true
					? start.x + directionShiftSpeed
					: start.x - directionShiftSpeed;
			if (startX >= 1) {
				console.log(ascXVar);
				ascXVar = false;
			}
			if (startX <= 0) {
				console.log(ascXVar);
				ascXVar = true;
			}
			let stop = gradientOptionsRef.current.start;
			let stopX = start.x + directionShiftSpeed;
			stopX =
				ascXVar == true
					? stop.x - directionShiftSpeed
					: stop.x + directionShiftSpeed;
			//end

			setGradientOptions({
				colours: gradientColors,
				gradientLocations: GRADIENT_POINTS,
				start: {
					x: startX,
					y: gradientOptionsRef.current.start.y,
				},
				end: {
					x: stopX,
					y: gradientOptionsRef.current.end.y,
				},
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
				start: gradientOptionsRef.current.start,
				end: gradientOptionsRef.current.end,
			});
		}

		timeout = setTimeout(animateGradient, SPEED);
	};

	// const updateDirection = () => {
	// 	console.log('updating direction');
	// 		let start = gradientOptionsRef.current.start;
	// 		let startX = start.x + 0.1;
	// 		startX =
	// 			ascXVar == true ? start.x + 0.1 : start.x - 0.1;
	// 		if (startX >= 1) {
	// 			console.log(ascXVar);
	// 			ascXVar = false;
	// 		}
	// 		if (startX <= 0) {
	// 			console.log(ascXVar);
	// 			ascXVar = false;
	// 		}
	// 		let stop = gradientOptionsRef.current.start;
	// 		let stopX = start.x + 0.1;
	// 		stopX = ascXVar == true ? stop.x - 0.1 : stop.x + 0.1;
	// 		if (stopX >= 1) {
	// 			ascXVar = false;
	// 		}
	// 		if (stopX <= 0) {
	// 			ascXVar = true;
	// 		}
	// };

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
