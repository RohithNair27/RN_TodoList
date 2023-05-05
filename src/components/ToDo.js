import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

function ToDo({ todo }) {
  // return (
  // <View style={styles.view_todo}>
  //   {todo.map((Element, key) => {
  //     return <Text style={styles.Todo_View}>{Element}</Text>;
  //   })}
  // </View>
  // );
  return (
    <FlatList
      style={styles.view_todo}
      data={todo}
      keyExtractor={todo.id}
      renderItem={({ item }) => {
        return <Text style={styles.Todo_View}>{item.text}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  view_todo: {
    height: 440,
    position: "relative",
    bottom: 20,
  },

  Todo_View: {
    marginBottom: 10,
    padding: 15,
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
});

export default ToDo;
