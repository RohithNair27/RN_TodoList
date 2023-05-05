import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

function AddBar({ handleChange, handleSubmit, value }) {
  return (
    <View>
      <Text style={styles.intro}>{`Hello User 
What are we doing Today?`}</Text>
      <TextInput
        style={styles.add_view}
        placeholder="Add Task"
        value={value}
        onChange={handleChange}
        onEndEditing={handleSubmit}
      ></TextInput>
      <Text style={styles.todo_text}>Here are you ToDos:-</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  add_view: {
    backgroundColor: "white",
    position: "relative",
    top: 180,
    padding: 15,
    width: 320,
    height: 50,
    left: 38,
    borderRadius: 20,
  },
  intro: {
    position: "absolute",
    top: 90,
    left: 38,
    color: "white",
    fontSize: 25,
  },
  todo_text: {
    position: "absolute",
    top: 260,
    left: 40,
    color: "white",
    fontSize: 20,
  },
});

export default AddBar;
