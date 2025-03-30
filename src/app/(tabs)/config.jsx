import { useContext } from "react";

import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import CustomButton from "@/components/Button";

import AuthContext from "@/contexts/AuthContext";

export default function ConfigScreen() {
  const { setUserId } = useContext(AuthContext);

  function deleteUser() {
    //
    router.replace("/");
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
