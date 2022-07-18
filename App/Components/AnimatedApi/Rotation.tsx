import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

const Rotation = () => {
  const rotateAnimation = useRef(new Animated.Value(1)).current;
  // const [rotateAnimation, setRotateAnimation] = useState((new Animated.Value(1)));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation,
      { toValue: 1, duration: 800, useNativeDriver: true }).start(() => {
        rotateAnimation.setValue(0)
      })
  }
  const interpolateRotation = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg']
  })
  const animatedStyle = {
    transform: [
      { rotate: interpolateRotation }
    ]
  }
  return (
    <TouchableOpacity onPress={async () => handleAnimation()}>
      <Animated.Text style={animatedStyle}>Click me to rotate</Animated.Text>
    </TouchableOpacity>
  )
}


export default Rotation

const styles = StyleSheet.create({})