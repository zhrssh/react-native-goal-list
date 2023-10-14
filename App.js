import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // Checks if input text is empty
    if (!enteredGoalText) return;

    // Adds the goal to the list
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.header}>Course Goals</Text>
      <Text style={styles.bodyText}>
        This will serve as your tracker for your course goals!
      </Text>
      <GoalInput props={{ addGoalHandler }} />
      <Text style={styles.header}>List of Goals</Text>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem itemData={itemData} />}
        />
      </View>
    </View>
  );
}

const colors = {
  primary: "#f8f4e3",
  secondary: "#706c61",
  accent: "#2a2b2a",
};

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.accent,
    marginTop: 4,
  },
  bodyText: {
    color: colors.accent,
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    maxHeight: "100vh",
  },
  goalsContainer: {
    flex: 5,
    marginVertical: 16,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.accent,
  },
  endOfList: {
    color: "#aaaaaa",
    textAlign: "center",
    marginVertical: 8,
  },
});
