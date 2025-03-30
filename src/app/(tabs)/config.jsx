import { useContext } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import CustomButton from "@/components/Button";

import AuthContext from "@/contexts/AuthContext";

export default function ConfigScreen() {
  const db = useSQLiteContext();
  const { userId, setUserId } = useContext(AuthContext);

  async function deleteUser() {
    try {
      await db.runAsync("DELETE FROM users WHERE id = ?", userId);

      router.replace("/");
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    setUserId(null);
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
