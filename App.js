import { StyleSheet, Text, View } from "react-native";
import CompletedTasks from "./src/screens/CompletedTasks";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HelloUser">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="completed" component={CompletedTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#BFB9FA",
  },
});
