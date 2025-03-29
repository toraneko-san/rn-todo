import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import AddTask from "@/components/task/AddTask";
import FilterTasks from "@/components/task/FilterTasks";
import TaskList from "@/components/task/TaskList";

const TASKS = [
  { id: 1, taskName: "Tarefa 1", isDone: true },
  { id: 2, taskName: "Tarefa 2", isDone: false },
];

export default function TasksScreen() {
  const [tasks, setTasks] = useState(TASKS);

  function getTaskList() {
    //
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
