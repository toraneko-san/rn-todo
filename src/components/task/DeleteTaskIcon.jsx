import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DeleteTaskIcon({ taskId, refetchTasks }) {
  function deleteTask() {
    //
    refetchTasks();
  }

  return (
    <Pressable style={styles.container} onPress={deleteTask}>
      <Ionicons name="trash" size={30} color="rgb(200,50,50)" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", paddingHorizontal: 10 },
});
