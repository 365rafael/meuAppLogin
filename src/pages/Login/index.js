import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import firebase from "../firebase/firebaseConnection";

import { useNavigation } from "@react-navigation/native";

console.disableYellowBox = true;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigation = useNavigation();

  async function logar() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        
        setUser(value.user.email);
        navigation.navigate("Home", { email });
      })
      .catch((error) => {
        alert("Ops algo deu errado!");
        return;
      });

    setEmail("");
    setPassword("");
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

      <Text style={styles.texto}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
        value={password}
      />

      <Button title="Acessar" onPress={logar} />

      <Text
        style={{
          marginTop: 20,
          marginBottom: 20,
          fontSize: 23,
          textAlign: "center",
        }}
      >
        
      </Text>

       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212",
    height: 45,
    fontSize: 17,
  },
});

/*
useEffect(()=> {

    async function dados(){

      //Olheiro da nossa database, fica constantemente verificando alteração na database
      await firebase.database().ref('usuarios/2').on('value', (snapshot) => {
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
      });

      //once olha uma só vez e só atualiza quando dá reload
      // await firebase.database().ref('nome').once('value', (snapshot)=> {
      //   setNome(snapshot.val());
      // });

       //criar um nó no DB
      // await firebase.database().ref("tipo").set("Cliente");
      //remover um nó
      //await firebase.database().ref("tipo").remove();
      //adicionar child
      //await firebase.database().ref("usuarios").child(3).set({
      //nome: 'Jose',
      //cargo: 'Programador Junior',
      //});
    }

    }

    dados();*/

//logar usuários
/*useEffect(() => {
      async function dados() {
        await firebase
          .database()
          .ref("usuarios")
          .on("value", (snapshot) => {
            setUsuarios([]);
            snapshot.forEach((chilItem) => {
              let data = {
                key: chilItem.key,
                nome: chilItem.val().nome,
                cargo: chilItem.val().cargo,
              };
              setUsuarios((oldArray) => [...oldArray, data].reverse());
            });
  
            setLoading(false);
          });
      }
  
      dados();
    }, []);*/
