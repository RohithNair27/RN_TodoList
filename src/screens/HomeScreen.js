import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AddBar from "../components/AddBar";
import { Dimensions } from "react-native";
import ToDo from "../components/ToDo";
import { nanoid } from "nanoid/non-secure";
import Footer from "../components/Footer";

function HomeScreen({ navigation }) {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const id = nanoid();
  const inputRef = useRef("");
  const [completed, setCompleted] = useState([null]);

  //two useState only to handle id
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(0);

  const handleChange = (event) => {
    setValue(event.nativeEvent.text);
  };

  const handleSubmit = () => {
    // for edit
    if (edit) {
      const editTask = todo.find((todo) => todo.id === editId);
      const index = todo.indexOf(editTask);
      todo[index] = { id: editId, text: value };
      setTodo[todo];
      setEdit(false);
    }
    //for entering the task
    else if (value.length > 0) {
      setTodo([
        {
          id: id,
          text: value,
        },
        ...todo,
      ]);
    } else {
      return;
    }
    // here the current focus is used to focus on a back to input screen
    inputRef.current.focus();
    // this is to make the value of the text to null after the submit
    setValue("");
  };

  const handleComplete = (deleteId) => {
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].id === deleteId) {
        const done = todo.splice(i, 1);
        setCompleted([done[0], ...completed]);
        console.log(completed);
        setTodo([...todo]);
      } else {
        continue;
      }
    }
  };

  const handleEdit = (editId) => {
    const editTask = todo.find((todo) => todo.id === editId);
    //put the focus back to textBox using useRef
    inputRef.current.focus();
    //put the seleted data into the text bar using useRef
    inputRef.current.setNativeProps({ text: editTask.text });
    setEdit(true);
    setEditId(editId);
  };

  return (
    <View>
      <View style={styles.homePage}>
        <AddBar
          inputRef={inputRef}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
        />
      </View>
      <ToDo
        todo={todo}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
      />
      <Footer navigation={navigation} completed={completed} />
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
  button: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
