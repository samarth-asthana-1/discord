import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDosqEvYnNzypDPKI_a_X4mekdxkSKHob8",
  authDomain: "discord-1d744.firebaseapp.com",
  databaseURL: "https://discord-1d744.firebaseio.com",
  projectId: "discord-1d744",
  storageBucket: "discord-1d744.appspot.com",
  messagingSenderId: "1029774571889",
  appId: "1:1029774571889:web:57f7f1f06fdd56035a5ed0",
  measurementId: "G-R3KH08SBYK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
