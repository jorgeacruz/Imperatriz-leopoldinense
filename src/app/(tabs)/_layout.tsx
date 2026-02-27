import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#e7cc01",
        },
        tabBarStyle: {
          backgroundColor: "#056a0a",
          borderTopWidth: 0,
          height: 90,
          paddingTop: 20,
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTintColor: "#000",
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          headerTintColor: "#000",
        }}
      />
    </Tabs>
  );
}
