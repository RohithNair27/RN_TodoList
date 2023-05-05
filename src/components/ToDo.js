import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ToDo({ value }) {
  return (
    <View style={styles.Todo_View}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Todo_View: {
    padding: 20,
    position: "relative",
    top: 300,
    left: 30,
    width: 330,
    height: 60,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
});

export default ToDo;
