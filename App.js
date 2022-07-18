import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Loading from "./App/Components/AnimatedApi/Loading1";
import Rotation from "./App/Components/AnimatedApi/Rotation";
import CButton from "./App/Components/Atoms/CButton";
import GradientAnimated from "./App/Components/Molecules/GradientAnimated";
import GradientAnimatedQuick from "./App/Components/Molecules/GradientAnimatedQuick";
import Draggable from "./App/Components/PanResponder/Draggable";

export default function App() {
  const [coords, setCoords] = useState({ x: 0.2, y: 0 });
  const handleTouch = (e) => {
    console.log(e.location, "TOUCH");
  };
  const [showGradient, setShowGradient] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showRotation, setShowRotation] = useState(false)
  const [showDraggable, setShowDraggable] = useState(false)

  const onShowGradientHandler = () => {
    setShowGradient(true);
    setShowLoader(false);
	setShowRotation(false)
	setShowDraggable(false)
  };
  const onShowLoaderHandler = () => {
    setShowGradient(false);
    setShowLoader(true);
	setShowRotation(false)
	setShowDraggable(false)
  };
  const onShowRotation = () => {
	setShowGradient(false);
    setShowLoader(false);
	  setShowRotation(true);
	  setShowDraggable(false)
  }
  const onShowDraggable = () => {
	setShowGradient(false);
    setShowLoader(false);
	  setShowRotation(false);
	  setShowDraggable(true)
  }
  return (
    <View style={styles.container}>
      <View style={{position: "absolute", top: 0, left: 0, zIndex: 99}}>
        <CButton onPress={() => onShowGradientHandler()}>
          <Text>Show Gradient</Text>
        </CButton>
        <CButton onPress={() => onShowLoaderHandler()}><Text>Show Loader</Text></CButton>
		<CButton onPress={() => onShowRotation()}><Text>Show Rotation </Text></CButton>
		<CButton onPress={() => onShowDraggable()}><Text>Show Draggable </Text></CButton>

	  </View>
      {showGradient && <GradientAnimatedQuick />}
      {showLoader && <Loading />}
	  {showRotation && <Rotation/>}
	  {showDraggable && <Draggable/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
