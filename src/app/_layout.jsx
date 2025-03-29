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
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="index"
        options={{ title: "Login", animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="register"
        options={{ title: "Cadastro", animation: "slide_from_right" }}
      />
    </Stack>
  );
}
