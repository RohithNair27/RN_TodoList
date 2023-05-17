import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function Footer({ navigation, completed, darkMode }) {
  const footerDarkMode = () => {
    if (darkMode) {
      return styles.footer;
    } else {
      return styles.footer_darkmode;
    }
  };
  return (
    <View style={footerDarkMode()}>
      <TouchableOpacity
        style={styles.completedTask}
        onPress={() => {
          navigation.navigate("Completed", { completed });
        }}
      >
        <Text style={styles.completedText}>Completed tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.aboutUs}
        onPress={() => {
          navigation.navigate("AboutUs");
        }}
      >
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
  footer_darkmode: {
    margin: 0,

    padding: 0,
    backgroundColor: "#3c3c3c",
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
    fontWeight: "bold",
  },
  aboutText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Footer;
