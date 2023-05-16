import { StyleSheet, Text, View } from "react-native";
import CompletedTasks from "./src/screens/CompletedTasks";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutUs from "./src/screens/AboutUs";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Completed"
          component={CompletedTasks}
          options={{
            headerStyle: {
              backgroundColor: "#BFB9FA",
            },
          }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            headerStyle: {
              backgroundColor: "#BFB9FA",
            },
          }}
        />
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
