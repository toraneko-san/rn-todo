import { useState, useContext, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { View, Alert, ActivityIndicator, StyleSheet } from "react-native";
import { router } from "expo-router";

import CustomTextInput from "@/components/TextInput";
import CustomButton from "@/components/Button";
import CustomLink from "@/components/Link";

import AuthContext from "@/contexts/AuthContext";

export default function LoginScreen() {
  const db = useSQLiteContext();
  const { createSession, isAuthenticated } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/tasks");
    }
  }, [isAuthenticated]);

  async function login() {
    if (!username || !password) {
      return Alert.alert("Preencha todos os campos!");
    }

    try {
      const registeredUser = await db.getFirstAsync(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password]
      );

      if (!registeredUser) {
        return Alert.alert("Nome do usuário ou senha incorreto.");
      }

      createSession(registeredUser.id);

      router.replace("/tasks");
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
          secureTextEntry={true}
        />
        <CustomButton onPress={login}>Entrar</CustomButton>
      </View>
      <CustomLink link="/register">Não tem uma conta? Cadastre-se</CustomLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 50, paddingHorizontal: 20 },
  forms: { gap: 20 },
});
