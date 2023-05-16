import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
function AboutUs({ navigation }) {
  return (
    <View style={styles.view_style}>
      <Header title="About Us" />

      <Text style={styles.text_info}>
        This application is created by Rohith Nair
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view_style: {
    borderWidth: 1,
    position: "relative",
    top: 40,
    height: 740,
  },

  text_info: {
    position: "relative",
    top: 240,
    left: 10,
    fontSize: 20,
  },
});
export default AboutUs;
