import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackActions } from '@react-navigation/native';
import Home from './Home';

const HomeStack = () => {
    const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name='Home' component={Home}/>
    </HomeStack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})