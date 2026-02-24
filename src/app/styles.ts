import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#056a0a",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  logo: {
    width: 130,
    height: 130,
    margin: 20,
  },
  field: {
    width: "80%",
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#fff",
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
  sendButtom: {
    backgroundColor: "#fff",
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  lostPasswordButton: {
    fontSize: 14,
    marginTop: 20,
  },
});
