import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

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
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Minhas Tarefas",
          tabBarLabel: "Tarefas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Configuração",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
