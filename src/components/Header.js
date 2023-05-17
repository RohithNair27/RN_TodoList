import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header({ title }) {
  return (
    <View style={styles.main_body}>
      <Text style={styles.heading_text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main_body: {
    height: 100,
    position: "relative",
    bottom: 40,
    backgroundColor: "#BFB9FA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  heading_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 40,
    right: 175,
  },
});
export default Header;
