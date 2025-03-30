import { useState } from "react";

import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import CustomTextInput from "../TextInput";
import CustomButton from "../Button";

export default function AddTask({ refetchTasks }) {
  const [newTask, setNewTask] = useState("");

  function add() {
    //
    refetchTasks();
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
