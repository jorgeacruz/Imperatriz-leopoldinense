import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <ImageBackground
        source={require("@/assets/one.jpg")}
        style={styles.ImgBck}
      />
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>FAZER LOGIN</Text>
      <TextInput
        placeholder="Digite seu nome"
        placeholderTextColor={"#fff"}
        style={styles.field}
      />
      <TextInput
        placeholder="Digite sua senha"
        placeholderTextColor={"#fff"}
        style={styles.field}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.sendButtom}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={{ color: "#000", fontWeight: "bold" }}>Fazer Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.lostPasswordButton}
        onPress={() => router.push("/lostpass")}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Perdi minha Senha
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={[styles.title, { marginTop: 30 }]}
          onPress={() => router.back()}
        >
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
