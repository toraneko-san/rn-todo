import { useState } from "react";
import { StyleSheet, View } from "react-native";

import CustomButton from "../Button";

export default function FilterTasks({ filterTasks, refetchTasks }) {
  const [filterOption, setFilterOption] = useState("");

  function filter(option) {
    //
    filterTasks([]);
  }

  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => {
          setFilterOption("");
          refetchTasks();
        }}
      >
        Todos
      </CustomButton>
      <CustomButton
        onPress={() => {
          filter("todo");
        }}
      >
        A fazer
      </CustomButton>
      <CustomButton
        onPress={() => {
          filter("done");
        }}
      >
        Feitos
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
});
