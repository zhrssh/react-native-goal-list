import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View key={props.itemData.item.key} style={styles.goalItemContainer}>
      <Text style={styles.goalItemHeader}>
        Goal {props.itemData.index + 1}:
      </Text>
      <Text style={styles.goalItemText}>{props.itemData.item.text}</Text>
    </View>
  );
}

const colors = {
  primary: "#f8f4e3",
  secondary: "#706c61",
  accent: "#2a2b2a",
};

const styles = StyleSheet.create({
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
});

export default GoalItem;
