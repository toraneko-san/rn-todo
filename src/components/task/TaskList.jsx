import { View, FlatList } from "react-native";

import Task from "./Task";

export default function TaskList({ tasks, refetchTasks }) {
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task isChecked={item.isDone} refetchTasks={refetchTasks}>
            {item.taskName}
          </Task>
        )}
        keyExtractor={(item) => item.id}
        style={{ height: "100%" }}
      />
    </View>
  );
}
