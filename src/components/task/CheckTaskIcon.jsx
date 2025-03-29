import { StyleSheet, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function CheckTaskIcon({ taskId, isChecked, refetchTasks }) {
  function checkTask() {
    //
    refetchTasks();
  }

  return (
    <Pressable style={styles.container} onPress={checkTask}>
      <FontAwesome
        name={isChecked ? "check-square" : "square-o"}
        size={30}
        color={isChecked ? "rgb(50, 200, 50)" : "rgb(0,0,0)"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", paddingHorizontal: 10 },
});
