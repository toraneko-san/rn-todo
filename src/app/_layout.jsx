import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackVisible: false,
        headerStyle: { backgroundColor: "rgb(50,150,250)" },
        headerTintColor: "rgb(255, 255, 255)",
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="sign-up" options={{ title: "Cadastro" }} />
    </Stack>
  );
}
