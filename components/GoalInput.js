import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput({ props }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoalText);

    // Clear Text
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Course Goal"
        style={styles.inputText}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} color={colors.accent} />
    </View>
  );
}

const colors = {
  primary: "#f8f4e3",
  secondary: "#706c61",
  accent: "#2a2b2a",
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.accent,
  },
  inputText: {
    borderWidth: 2,
    borderColor: colors.accent,
    color: "#aaaaaa",
    width: "70%",
    marginRight: 8,
    padding: 13,
    borderRadius: 10,
  },
});

export default GoalInput;
