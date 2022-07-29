import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Gradient from "./Gradient/Gradient";
import Draggable from "./Draggable/PanResponder/Draggable";
import Animations from "./AnimationsDemo/Animations";

const Home = () => {
  const Drawer = createDrawerNavigator();

  const isLargeScreen = useWindowDimensions().width >= 768;
  return (
    <Drawer.Navigator
      initialRouteName="Gradient"
      screenOptions={{
        headerTransparent: true,
        headerShown: true,
        drawerType: isLargeScreen ? "permanent" : "back",
        swipeEdgeWidth: 150,
        gestureEnabled: true
      }}
    >
      <Drawer.Screen name="Gradient" component={Gradient} />
      <Drawer.Screen name='Draggable' component={Draggable}/>
      <Drawer.Screen name='Animations' component={Animations}/>

    </Drawer.Navigator>
    // <Drawer.Navigator
    //   initalRouteName="Gradient"
    //   screenOptions={{
    //     headerShown: true,
    //     drawerPosition: "right",
    //     drawerType: isLargeScreen ? "permanent" : "back",
    //     gestureEnabled: true,
    //     swipeEdgeWidth: 100,
    //   }}
    // >
    // </Drawer.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
