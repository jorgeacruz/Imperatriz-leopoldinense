import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="lostpass"
        options={{
          headerTitle: "Recuperar Senha",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
