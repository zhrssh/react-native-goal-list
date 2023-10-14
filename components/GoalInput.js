import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-web";
import { useState } from "react";

function GoalInput({ props }) {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [isPressed, setPressed] = useState(false);

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
			<Pressable
				style={{
					borderWidth: 2,
					borderColor: colors.primary,
					backgroundColor: colors.accent,
					borderRadius: 5,
					padding: "0.5em",
					opacity: isPressed ? 0.5 : 1,
				}}
				onPress={addGoalHandler}
				onPressIn={() => {
					console.log("onPressIn called");
					setPressed(true);
				}}
				onPressOut={() => {
					console.log("onPressOut called");
					setPressed(false);
				}}>
				<Text style={styles.buttonText}>Add Goal</Text>
			</Pressable>
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
	buttonText: {
		fontFamily: "Inter",
		fontWeight: "500",
		color: colors.primary,
	},
});

export default GoalInput;
