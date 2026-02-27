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

export default function Lostpass() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <ImageBackground
        source={require("@/assets/two.jpg")}
        style={styles.ImgBck}
      />
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>RECUPERAR SENHA</Text>
      <TextInput
        placeholder="Digite seu nome"
        placeholderTextColor={"#fff"}
        style={styles.field}
      />
      <TextInput
        placeholder="Digite seu email Cadastrado"
        placeholderTextColor={"#fff"}
        style={styles.field}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.sendButtom}
        onPress={() => alert("Inscrição enviada!")}
      >
        <Text style={{ color: "#000", fontWeight: "bold" }}>
          Recuperar Senha
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lostPasswordButton}>
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
