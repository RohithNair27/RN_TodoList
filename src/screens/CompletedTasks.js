import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ToDo from "../components/ToDo";

const CompletedTasks = ({ route }) => {
  const { completed } = route.params;

  return (
    <View style={styles.completedTask}>
      <ToDo todo={completed} isScreen={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  completedTask: {
    position: "relative",
    top: 40,
  },
});

export default CompletedTasks;
