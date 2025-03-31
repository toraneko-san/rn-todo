import { Stack } from "expo-router";

import { SQLiteProvider } from "expo-sqlite";
import { AuthProvider } from "@/contexts/AuthContext";

import { initDatabase } from "@/database/initDatabase";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="database.db" onInit={initDatabase}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(app)" />
        </Stack>
      </AuthProvider>
    </SQLiteProvider>
  );
}
