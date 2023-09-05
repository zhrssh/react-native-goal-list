import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList,
} from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native-web";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		// Checks if input text is empty
		if (!enteredGoalText) return;

		// Adds the goal to the list
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			enteredGoalText,
		]);

		// Clear text
		setEnteredGoalText("");
	}

	return (
		<View style={styles.appContainer}>
			<Text style={styles.header}>Course Goals</Text>
			<Text style={styles.bodyText}>
				This will serve as your tracker for your course goals!
			</Text>
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
			<Text style={styles.header}>List of Goals</Text>
			<View style={styles.goalsContainer}>
				<ScrollView>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<View key={itemData.index} style={styles.goalItemContainer}>
									<Text style={styles.goalItemHeader}>
										Goal {itemData.index + 1}:
									</Text>
									<Text style={styles.goalItemText}>{itemData.item}</Text>
								</View>
							);
						}}
					/>
					<Text style={styles.endOfList}>End of list.</Text>
				</ScrollView>
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
	goalsContainer: {
		flex: 5,
		marginVertical: 16,
		flexDirection: "column",
		borderWidth: 2,
		borderRadius: 10,
		borderColor: colors.accent,
	},
	goalItemContainer: {
		margin: 4,
		paddingVertical: 24,
		paddingHorizontal: 16,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: colors.accent,
		shadowColor: colors.accent,
		backgroundColor: colors.secondary,
		color: colors.primary,
		fontSize: 18,
		fontWeight: "bold",
	},
	goalItemHeader: {
		color: colors.primary,
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 4,
	},
	goalItemText: {
		color: colors.primary,
		fontSize: 18,
	},
	endOfList: {
		color: "#aaaaaa",
		textAlign: "center",
		marginVertical: 8,
	},
});
