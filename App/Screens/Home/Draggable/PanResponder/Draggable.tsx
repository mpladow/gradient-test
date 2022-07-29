import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Container from '../../../../Components/Atoms/Container';

const Draggable = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;
  return (
    <Container>
      <Text>Draggable</Text>
    <Text>A Draggable box that uses panResponder to move a component around the screen</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x },
          { translateY: pan.y }]
        }} {...panResponder.panHandlers}>
        <View style={styles.box}></View>
      </Animated.View>
    </Container>
  )
}

export default Draggable

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    borderRadius: 5
  }
})