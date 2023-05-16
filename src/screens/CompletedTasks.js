import React, { useEffect } from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import ToDo from "../components/ToDo";
import Header from "../components/Header";

const CompletedTasks = ({ route }) => {
  const { completed } = route.params;
  const [completed_tasks, setCompleted_tasks] = useState([]);

  useEffect(() => {
    setCompleted_tasks(completed);
  }, []);

  const handleDeleteComplete = (deleteId) => {
    for (let i = 0; i < completed_tasks.length; i++) {
      if (completed_tasks[i].id === deleteId) {
        completed_tasks.splice(i, 1);
      }
      setCompleted_tasks([...completed_tasks]);
    }
  };

  return (
    <View style={styles.completedTask}>
      <Header title="Completed" />
      <ToDo
        todo={completed_tasks}
        isScreen={true}
        handleDeleteComplete={handleDeleteComplete}
      />
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
