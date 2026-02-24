import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Faça sua inscrição</Text>
      <TextInput placeholder="Digite seu nome" style={styles.field} />
      <TextInput
        placeholder="Digite sua senha"
        placeholderTextColor={"#fff"}
        style={styles.field}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.sendButtom}
        onPress={() => alert("Inscrição enviada!")}
      >
        <Text style={{ color: "#000", fontWeight: "bold" }}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lostPasswordButton}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Perdi minha Senha
        </Text>
      </TouchableOpacity>
    </View>
  );
}
