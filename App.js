import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import Loading from "./App/Screens/Home/Gradient/Components/AnimatedApi/Loading1";
import Rotation from "./App/Screens/Home/Gradient/Components/AnimatedApi/Rotation";
import CButton from "./App/Components/Atoms/CButton";
import GradientAnimated from "./App/Screens/Home/Gradient/Components/Molecules/GradientAnimated";
import GradientAnimatedQuick from "./App/Screens/Home/Gradient/Components/Molecules/GradientAnimatedQuick";
import Draggable from "./App/Screens/Home/Draggable/PanResponder/Draggable";
import Gradient from "./App/Screens/Home/Gradient/Gradient";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./App/Screens/Home/HomeStack";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* Rest of your app code */}
        <HomeStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
