import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      //header Options
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: "#e7cc01",
        },
        //TabsIcon Customization
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "index") {
            // Set the icon name based on the focused state
            iconName = focused ? "home" : "home-outline";
            size = focused ? 22 : 22; // Increase size when focused
          } else if (route.name === "perfil") {
            iconName = focused ? "person" : "person-outline";
            size = focused ? 22 : 22;
          } else if (route.name === "diretoria") {
            iconName = focused ? "people" : "people-outline";
            size = focused ? 22 : 22;
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: "#056a0a",
          borderTopWidth: 0,
          height: 90,
          paddingTop: 20,
        },
        tabBarActiveTintColor: "#e7cc01",
        tabBarInactiveTintColor: "#fff",
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTintColor: "#000",
        }}
      />
      <Tabs.Screen
        name="diretoria"
        options={{
          title: "Diretor",
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
