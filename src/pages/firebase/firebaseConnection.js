import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyCPca_EJMf460r1p-yhc8Ww542aCT0CZms",

  authDomain: "meuapp-b1a00.firebaseapp.com",

  databaseURL: "https://meuapp-b1a00-default-rtdb.firebaseio.com",

  projectId: "meuapp-b1a00",

  storageBucket: "meuapp-b1a00.appspot.com",

  messagingSenderId: "811682907035",

  appId: "1:811682907035:web:d91ee720a8f5c6435e973e",

  measurementId: "G-X8L8YYNWKP",
};

if (!firebase.apps.length) {
  //Abrir minha conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
