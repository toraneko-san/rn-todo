import { useEffect, useContext } from "react";

import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import AuthContext from "@/contexts/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {
  const { isAuthenticated, isAppReady } = useContext(AuthContext);

  useEffect(() => {
    if (isAppReady) SplashScreen.hideAsync();
    if (isAuthenticated) router.replace("/tasks");
  }, [isAuthenticated, isAppReady]);

  if (isAuthenticated || !isAppReady) return null;

  return (
    <Stack
      screenOptions={{
        headerBackVisible: false,
        headerStyle: { backgroundColor: "rgb(50,150,250)" },
        headerTintColor: "rgb(255, 255, 255)",
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Cadastro" }} />
    </Stack>
  );
}
