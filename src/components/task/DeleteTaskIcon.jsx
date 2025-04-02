import { useSQLiteContext } from "expo-sqlite";

import { StyleSheet, Alert, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DeleteTaskIcon({ taskId, refetchTasks }) {
  const db = useSQLiteContext();

  function deleteTask() {
    Alert.alert("Deletar tarefa", "Tem certeza que quer deletar essa tarefa?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          try {
            await db.runAsync("DELETE FROM tasks WHERE id = ?", taskId);

            refetchTasks();
          } catch (error) {
            throw error;
          }
        },
      },
    ]);
  }

  return (
    <Pressable style={styles.container} onPress={deleteTask}>
      <Ionicons name="trash" size={30} color="rgb(250,0,0)" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", paddingHorizontal: 10 },
});
