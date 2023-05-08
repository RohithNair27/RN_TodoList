import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddBar from "../components/AddBar";
import { Dimensions } from "react-native";
import ToDo from "../components/ToDo";
import { nanoid } from "nanoid/non-secure";

function HomeScreen() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const id = nanoid();

  const handleChange = (event) => {
    setValue(event.nativeEvent.text);
  };

  const handleSubmit = () => {
    setTodo([
      {
        id: id,
        text: value,
      },
      ...todo,
    ]);

    setValue("");
  };
  const handleDelete = (deleteId) => {
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].id === deleteId) {
        todo.splice(i, 1);
        setTodo([...todo]);
      } else {
        continue;
      }
    }
  };

  return (
    <View>
      <View style={styles.homePage}>
        <AddBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
        />
      </View>
      <ToDo handleDelete={handleDelete} todo={todo} />
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowLength = Dimensions.get("window").height;
const styles = StyleSheet.create({
  homePage: {
    position: "relative",
    elevation: 8,
    bottom: 30,
    width: windowWidth,
    height: windowLength / 2.5,
    backgroundColor: "#BFB9FA",
    borderRadius: 40,
  },
});
export default HomeScreen;
