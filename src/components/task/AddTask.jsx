import { useState, useContext } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import CustomTextInput from "../TextInput";
import CustomButton from "../Button";

import AuthContext from "@/contexts/AuthContext";

export default function AddTask({ refetchTasks }) {
  const db = useSQLiteContext();
  const { userId } = useContext(AuthContext);

  const [newTask, setNewTask] = useState("");

  async function add() {
    try {
      if (!newTask) return;

      await db.runAsync("INSERT INTO tasks (taskName, userId) VALUES (?,?)", [
        newTask,
        userId,
      ]);

      refetchTasks();
    } catch (error) {
      throw error;
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="clipboard-outline"
            size={25}
            color="rgb(255,255,255)"
          />
        </View>
        <View style={{ flex: 1 }}>
          <CustomTextInput
            value={newTask}
            onChangeText={setNewTask}
            placeholder="Nova tarefa..."
          />
        </View>
      </View>
      <CustomButton onPress={add}>Adicionar nova tarefa</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.1)",
    padding: 15,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 50,
    height: 50,
    backgroundColor: "rgb(50,150,250)",
  },
});
