import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

function ToDo({ todo }) {
  return (
    <View style={styles.view_todo}>
      {todo.map((Element, key) => {
        return <Text style={styles.Todo_View}>{Element}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  view_todo: {
    borderWidth: 1,
    height: 440,
    position: "relative",
    top: 250,
  },

  Todo_View: {
    borderWidth: 1,
    padding: 20,
    position: "relative",
    width: 330,
    height: 60,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
});

export default ToDo;
