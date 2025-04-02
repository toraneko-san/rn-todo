import { StyleSheet, Text, View } from "react-native";

import CheckTaskIcon from "./CheckTaskIcon";
import DeleteTaskIcon from "./DeleteTaskIcon";

export default function Task({ children, taskId, isChecked, refetchTasks }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.taskName, isChecked ? styles.checkedTaskName : {}]}>
        {children}
      </Text>
      <View style={styles.iconContainer}>
        <CheckTaskIcon
          taskId={taskId}
          isChecked={isChecked}
          refetchTasks={refetchTasks}
        />
        <DeleteTaskIcon taskId={taskId} refetchTasks={refetchTasks} />
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
    paddingHorizontal: 15,
    minHeight: 60,
  },
  taskName: { fontSize: 20, flex: 1 },
  checkedTaskName: {
    textDecorationLine: "line-through",
    color: "rgb(250,0,0)",
  },
  iconContainer: { flexDirection: "row", alignSelf: "stretch" },
});
