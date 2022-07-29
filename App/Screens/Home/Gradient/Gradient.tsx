import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientAnimatedQuick from "./Components/Molecules/GradientAnimatedQuick";
import Container from "../../../Components/Atoms/Container";

const Gradient = () => {
  return (
    <Container>
      <GradientAnimatedQuick />
    </Container>
  );
};

export default Gradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
