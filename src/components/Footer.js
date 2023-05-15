import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function Footer({ navigation, completed }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.completedTask}
        onPress={() => {
          navigation.navigate("completed", { completed });
        }}
      >
        <Text style={styles.completedText}>Completed tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutUs}>
        <Text style={styles.aboutText}>About us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    margin: 0,

    padding: 0,
    backgroundColor: "#BFB9FA",
    position: "relative",
    bottom: 32,
    width: 395,
    height: 60,
    display: "flex",
    flexDirection: "row",
  },
  completedTask: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "white",
    width: 395 / 2,
    height: 60,
  },
  aboutUs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderlefttWidth: 1,
    width: 395 / 2,
    height: 60,
  },
  completedText: {
    color: "white",
    fontSize: 20,
  },
  aboutText: {
    color: "white",
    fontSize: 20,
  },
});

export default Footer;
