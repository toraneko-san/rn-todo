import { useState } from "react";

import { View, StyleSheet } from "react-native";

import CustomTextInput from "@/components/TextInput";
import CustomButton from "@/components/Button";
import CustomLink from "@/components/Link";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    //
  }

  return (
    <View style={styles.container}>
      <View style={styles.forms}>
        <CustomTextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Nome do usuário (max: 10 caracteres)"
          maxLength={10}
        />
        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha (max: 20 caracteres)"
          maxLength={20}
          secureTextEntry={true}
        />
        <CustomButton onPress={login}>Entrar</CustomButton>
      </View>
      <CustomLink link="/sign-up">Não tem uma conta? Cadastre-se</CustomLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 50, paddingHorizontal: 20 },
  forms: { gap: 20 },
});
