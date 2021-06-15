import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA5W0lU2wPew6TD5x9JpHelvTaqbGeDek8",
  authDomain: "react-discord-d247d.firebaseapp.com",
  projectId: "react-discord-d247d",
  storageBucket: "react-discord-d247d.appspot.com",
  messagingSenderId: "644738423540",
  appId: "1:644738423540:web:6823e8aae2caf46455dca1",
  measurementId: "G-QN4EQH2T37",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
