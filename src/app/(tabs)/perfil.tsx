import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/(stack)")}>
        <Text>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}
