import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddBar from "../components/AddBar";
import { Dimensions } from "react-native";
import ToDo from "../components/ToDo";

function HomeScreen() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.Text);
  };

  return (
    <View>
      <View style={styles.homePage}>
        <AddBar handleChange={handleChange} />
        {console.log(value)}
        <ToDo />
      </View>
      <View></View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowLength = Dimensions.get("window").height;
const styles = StyleSheet.create({
  homePage: {
    position: "relative",
    bottom: 245,
    width: windowWidth,
    height: windowLength / 2.5,
    backgroundColor: "#BFB9FA",
    borderRadius: 40,
  },
});
export default HomeScreen;
