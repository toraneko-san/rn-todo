import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CheckTaskIcon({ taskId, isChecked, refetchTasks }) {
  function checkTask() {
    //
    refetchTasks();
  }

  return (
    <Pressable style={styles.container} onPress={checkTask}>
      <Ionicons
        name={isChecked ? "checkbox" : "square-outline"}
        size={30}
        color={isChecked ? "rgb(50, 200, 50)" : "rgb(0,0,0)"}
        style={styles.icon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", paddingHorizontal: 10 },
  icon: { paddingTop: 5 },
});
