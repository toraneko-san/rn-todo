import { useState } from "react";

import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import CustomTextInput from "@/components/TextInput";
import CustomButton from "@/components/Button";
import CustomLink from "@/components/Link";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    //
    router.replace("/tasks");
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
