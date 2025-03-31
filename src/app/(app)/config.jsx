import { useContext } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { View, Alert, StyleSheet } from "react-native";
import { router } from "expo-router";

import CustomButton from "@/components/Button";

import AuthContext from "@/contexts/AuthContext";

export default function ConfigScreen() {
  const db = useSQLiteContext();
  const { userId, finishSession } = useContext(AuthContext);

  function deleteUser() {
    Alert.alert("Deletar usuário", "Tem certeza que quer deletar sua conta?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          try {
            await db.runAsync("DELETE FROM users WHERE id = ?", userId);

            router.replace("/");
          } catch (error) {
            throw error;
          }
        },
      },
    ]);
  }

  function logout() {
    finishSession();
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
