import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import CustomButton from "@/components/Button";

export default function ConfigScreen() {
  function deleteUser() {
    //
    router.replace("/");
  }

  function logout() {
    //
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <CustomButton onPress={deleteUser} type="secondary">
        Deletar conta
      </CustomButton>
      <CustomButton onPress={logout}>Logout</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 15 },
});
