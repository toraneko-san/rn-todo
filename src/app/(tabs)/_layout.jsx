import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerBackVisible: false,
        headerStyle: { backgroundColor: "rgb(50,150,250)" },
        headerTintColor: "rgb(255, 255, 255)",
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
      }}
    >
      <Tabs.Screen name="tasks" options={{ title: "Minhas Tarefas" }} />
      <Tabs.Screen name="config" options={{ title: "Configuração" }} />
    </Tabs>
  );
}
