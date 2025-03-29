import { StyleSheet, Text, View } from "react-native";

import CheckTaskIcon from "./CheckTaskIcon";
import DeleteTaskIcon from "./DeleteTaskIcon";

export default function Task({ children, isChecked, refetchTasks }) {
  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{children}</Text>
      <View style={styles.iconContainer}>
        <CheckTaskIcon isChecked={isChecked} refetchTasks={refetchTasks} />
        <DeleteTaskIcon refetchTasks={refetchTasks} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.1)",
    padding: 15,
    minHeight: 50,
  },
  taskName: { fontSize: 20, flex: 1 },
  iconContainer: { flexDirection: "row", alignSelf: "stretch" },
});
