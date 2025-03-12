import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo à página Home</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CadastroEvento")}
      >
        <Text style={styles.texto}>Cadastrar Evento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CadastroOrganizador")}
      >
        <Text style={styles.texto}>Cadastrar Organizador</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CadastroIngresso")}
      >
        <Text style={styles.texto}>Cadastrar Ingresso</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  texto: {
    fontWeight: "bold",
    color: "white",
  },

  button: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#00A6FF",
    padding: 10,
    borderWidth: 3,
    borderColor: "#003BB9",
    borderRadius: 10,
    margin: 5,
  },
});
