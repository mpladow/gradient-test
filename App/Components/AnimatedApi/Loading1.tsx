import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Loading = () => {

    const progress = useRef(new Animated.Value(0.5)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const SIZE = 100;

    let animateProgStart = Animated.spring(progress, { toValue: 1, useNativeDriver: true });
    let animateProgEnd = Animated.spring(progress, { toValue: 0.5, useNativeDriver: true });
    let animateScaleStart = Animated.spring(scale, { toValue: 1, useNativeDriver: true });
    let animateScaleEnd = Animated.spring(scale, { toValue: 2, useNativeDriver: true });

    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence(
                    [animateProgStart, animateProgEnd]
                ),
                Animated.sequence(
                    [animateScaleEnd, animateScaleStart]
                )
            ]), { iterations: 3 }
        ).start()
    }, [])

    return (
        <View>
            <Animated.View style={[styles.square, {
                borderRadius: progress.interpolate({
                    inputRange: [0.5, 1],
                    outputRange: [SIZE / 4, SIZE / 2] // final output of the 
                }), 
                opacity: progress,
                transform: [{ scale },
                {
                    rotate: progress.interpolate({
                        inputRange: [0.5, 1],
                        outputRange: [Math.PI, 2 * Math.PI]
                    })
                }]
            }
            ]} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(0,0,255, 0.5)'

    }
})