import { useState } from "react";

import { View, StyleSheet } from "react-native";

import CustomTextInput from "@/components/TextInput";
import CustomButton from "@/components/Button";
import CustomLink from "@/components/Link";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function register() {
    //
  }

  return (
    <View style={styles.container}>
      <View style={styles.forms}>
        <CustomTextInput
          value={username}
          onPress={setUsername}
          placeholder="Nome do usuário (max: 10 caracteres)"
          maxLength={10}
        />
        <CustomTextInput
          value={password}
          onPress={setPassword}
          placeholder="Senha (max: 20 caracteres)"
          maxLength={20}
        />
        <CustomButton onPress={register}>Cadastrar</CustomButton>
      </View>
      <CustomLink link="/">Já tem uma conta? Faça login!</CustomLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 50, paddingHorizontal: 20 },
  forms: { gap: 20 },
});
