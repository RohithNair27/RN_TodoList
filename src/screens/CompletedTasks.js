import React from "react";
import { Text, View } from "react-native";
import ToDo from "../components/ToDo";

const CompletedTasks = ({ route }) => {
  const { completed } = route.params;

  return (
    <View>
      {completed.map((element) => {
        return <Text key={element.id}>{element.text}</Text>;
      })}
    </View>
  );
};

export default CompletedTasks;
