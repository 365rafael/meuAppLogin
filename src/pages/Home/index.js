import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function Home() {
  const route = useRoute();
  const navigation = useNavigation();

  function logout() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-Vindo: </Text>
      <Text style={styles.texto}>{route.params?.email}</Text>
      <View style={[{ width: "90%", margin: 20 }]}>
        <Button title="Deslogar" onPress={logout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
