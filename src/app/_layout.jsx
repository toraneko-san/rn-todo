import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

import { initDatabase } from "@/database/initDatabase";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="database.db" onInit={initDatabase}>
      <Stack
        screenOptions={{
          headerBackVisible: false,
          headerStyle: { backgroundColor: "rgb(50,150,250)" },
          headerTintColor: "rgb(255, 255, 255)",
          headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Cadastro" }} />
      </Stack>
    </SQLiteProvider>
  );
}
