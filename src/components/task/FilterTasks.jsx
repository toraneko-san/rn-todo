import { StyleSheet, View } from "react-native";

import CustomButton from "../Button";

export default function FilterTasks({ setFilterOption }) {
  return (
    <View style={styles.container}>
      <CustomButton onPress={() => setFilterOption(null)}>Todos</CustomButton>
      <CustomButton onPress={() => setFilterOption("todo")}>
        A fazer
      </CustomButton>
      <CustomButton onPress={() => setFilterOption("done")}>
        Feitos
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
});
