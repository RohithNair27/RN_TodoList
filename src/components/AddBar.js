import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

function AddBar({
  handleChange,
  handleSubmit,
  value,
  inputRef,
  enableDarkMode,
}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.darkMode}
        onPress={() => enableDarkMode()}
      >
        <Text style={styles.darkModeText}>DarkMode</Text>
      </TouchableOpacity>
      <Text style={styles.intro}>Hello User</Text>
      <Text style={styles.down_intro}>Enter today's tasks </Text>
      <TextInput
        ref={inputRef}
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
    top: 160,
    padding: 15,
    width: 320,
    height: 50,
    left: 38,
    borderRadius: 20,
  },
  intro: {
    fontWeight: "bold",
    position: "absolute",
    top: 90,
    left: 38,
    color: "white",
    fontSize: 30,
  },
  down_intro: {
    position: "absolute",
    top: 140,
    left: 38,
    color: "white",
    fontSize: 20,
  },
  todo_text: {
    position: "absolute",
    top: 260,
    left: 40,
    color: "white",
    fontSize: 20,
  },
  darkMode: {
    position: "relative",
    borderWidth: 1,
    width: 90,
    height: 30,
    top: 80,
    left: 280,
    borderRadius: 10,
    borderColor: "white",
  },
  darkModeText: {
    position: "relative",
    left: 10,
    top: 5,
    color: "white",
    fontWeight: "bold",
  },
});

export default AddBar;
