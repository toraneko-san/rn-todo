import { useState, useEffect, useContext } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { View, Text, StyleSheet } from "react-native";

import AddTask from "@/components/task/AddTask";
import FilterTasks from "@/components/task/FilterTasks";
import TaskList from "@/components/task/TaskList";

import AuthContext from "@/contexts/AuthContext";

export default function TasksScreen() {
  const db = useSQLiteContext();
  const { userId } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);

  async function getTaskList() {
    try {
      const storedTasks = await db.getAllAsync(
        "SELECT * FROM tasks WHERE userId = ?",
        userId
      );

      setTasks(storedTasks);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <View style={styles.container}>
      <AddTask refetchTasks={getTaskList} />
      <Text style={styles.title}>Tarefas</Text>
      <FilterTasks filterTasks={setTasks} refetchTasks={getTaskList} />
      <TaskList tasks={tasks} refetchTasks={getTaskList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 15 },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(50,150,250)",
  },
});
