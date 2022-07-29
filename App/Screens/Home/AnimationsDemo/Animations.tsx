import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import CButton from "../../../Components/Atoms/CButton";
import Container from "../../../Components/Atoms/Container";

const Animations = () => {
  const translationX = useRef<any>(new Animated.Value(0)).current;
  const translationY = useRef<any>(new Animated.Value(0)).current;
  let originalPosition = {} as any;
  let currentPosition = {} as any;
  useEffect(() => {
    if (originalPos.current) {
      originalPos.current?.measure((fx, fy, width, height, px, py) => {
        originalPosition = {
          fx: fx,
          fy: fy,
          width: width,
          height: height,
          px: px,
          py: py,
        };
        console.log(originalPosition);
      });
    }
  }, []);

  const onSlideXPress = () => {
    console.log("SLIDE ANIMATION");
    Animated.timing(translationX, {
      toValue: translationX._value + 50,
      easing: Easing.back(),
      useNativeDriver: true,
    }).start();

  };
  const onSlideYPress = () => {
    Animated.timing(translationY, {
      toValue: translationY._value + 50,
      easing: Easing.back(),
      useNativeDriver: true,
    }).start();

  };
  
  const onResetPress = () => {
    Animated.parallel([
        Animated.timing(translationX, {
            toValue: 0,
            useNativeDriver: true
        }),
        Animated.timing(translationY, {
            toValue: 0,
            useNativeDriver: true
        })
    ]).start()
  };
  const originalPos = useRef();
  return (
    <Container>
      <Text>Animations</Text>
      <Text>
        Demonstation of different animations that can be achieved using Animated
        API.
      </Text>
      <CButton onPress={onSlideXPress}>Basic Slide X</CButton>
      <CButton onPress={onSlideYPress}>Basic Slide Y</CButton>

      <CButton onPress={onResetPress}>Reset</CButton>

      <Animated.View
        ref={originalPos}
        style={[styles.square, { transform: [{translateY: translationY }, {translateX: translationX}] }]}
      ></Animated.View>
    </Container>
  );
};

export default Animations;

const styles = StyleSheet.create({
  square: {
    width: 150,
    height: 150,
    backgroundColor: "green",
    borderRadius: 8,
  },
});
