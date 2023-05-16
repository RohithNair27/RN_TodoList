import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, FlatList } from "react-native";

function ToDo({
  todo,
  handleComplete,
  handleEdit,
  isScreen,
  handleDeleteComplete,
}) {
  function view_todo_style() {
    if (isScreen) {
      return styles.view_todo_completed;
    } else {
      return styles.view_todo_home;
    }
  }

  return (
    <FlatList
      style={view_todo_style()}
      data={todo}
      keyExtractor={todo.id}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.Todo_View_home}>{item.text}</Text>

            {!isScreen ? (
              <Feather
                style={styles.edit}
                name="edit"
                size={24}
                color="white"
                onPress={() => handleEdit(item.id)}
              />
            ) : null}
            {!isScreen ? (
              <Ionicons
                style={styles.completed}
                name="checkmark-done"
                size={24}
                color="white"
                onPress={() => handleComplete(item.id)}
              />
            ) : (
              <MaterialIcons
                name="delete"
                size={24}
                color="white"
                style={styles.completed}
                onPress={() => handleDeleteComplete(item.id)}
              />
            )}
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  view_todo_home: {
    height: 440,
    position: "relative",
    bottom: 20,
  },
  view_todo_completed: {
    height: 670,
    position: "relative",
    bottom: 39,
  },

  Todo_View_home: {
    marginBottom: 10,

    paddingTop: 15,
    paddingLeft: 20,

    position: "relative",
    top: 1,
    width: 330,
    height: 60,
    left: 30,
    fontSize: 20,
    color: "white",
    backgroundColor: "#BFB9FA",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 8,
  },
  completed: {
    position: "absolute",
    left: 320,
    top: 20,
  },
  edit: {
    position: "absolute",
    left: 290,
    top: 20,
  },
});

export default ToDo;
