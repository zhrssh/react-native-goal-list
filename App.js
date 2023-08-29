import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	// /**
	//  * Bad Programming Practice
	//  */
	// function addGoalHandler() {
	// 	setCourseGoals([...courseGoals, enteredGoalText]);
	// }

	function addGoalHandler() {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			enteredGoalText,
		]);

		// Clear text
		setEnteredGoalText("");
	}

	return (
		<View style={styles.appContainer}>
			<Text style={styles.header}>Goal Tracker</Text>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Your Course Goal"
					style={styles.inputText}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<Button
					title="Add Goal"
					onPress={addGoalHandler}
					color={colors.accent}
				/>
			</View>
			<View style={styles.goalsContainer}>
				<Text style={styles.header}>List of Goals</Text>
				{courseGoals.map((goal) => (
					<Text key={goal} style={styles.goalItem}>
						{goal}
					</Text>
				))}
				<Text style={styles.endOfList}>End of list.</Text>
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
		textAlign: "center",
		fontSize: 36,
		fontWeight: "bold",
		color: colors.accent,
		marginTop: 4,
	},
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: colors.primary,
	},
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
	},
	goalsContainer: {
		flex: 5,
		flexDirection: "column",
	},
	goalItem: {
		marginVertical: 4,
		paddingVertical: 24,
		paddingHorizontal: 16,
		borderWidth: 2,
		borderColor: colors.accent,
		shadowColor: colors.accent,
		backgroundColor: colors.secondary,
		color: colors.primary,
		fontSize: 18,
		fontWeight: "bold",
	},
	endOfList: {
		color: "#aaaaaa",
		textAlign: "center",
	},
});
