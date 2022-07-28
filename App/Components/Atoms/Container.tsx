import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};
const Container: React.FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 
  },
});
