import { useState } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { View, Alert, StyleSheet } from "react-native";
import { router } from "expo-router";

import CustomTextInput from "@/components/TextInput";
import CustomButton from "@/components/Button";
import CustomLink from "@/components/Link";

export default function RegisterScreen() {
  const db = useSQLiteContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    if (!username || !password) {
      return Alert.alert("Preencha todos os campos!");
    }

    try {
      const duplicatedUser = await db.getFirstAsync(
        "SELECT * FROM users WHERE username = ?",
        username
      );

      if (duplicatedUser) {
        return Alert.alert(
          "Nome do usuário existente",
          "Cadastre com outro nome!"
        );
      }

      await db.runAsync(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, password]
      );

      Alert.alert("Cadastrado realizado com sucesso!");

      router.dismissAll();
    } catch (error) {
      throw error;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.forms}>
        <CustomTextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Nome do usuário"
        />
        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
        />
        <CustomButton onPress={register}>Cadastrar</CustomButton>
      </View>
      <CustomLink link="/" dismissTo>
        Já tem uma conta? Faça login!
      </CustomLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 50, paddingHorizontal: 20 },
  forms: { gap: 20 },
});
