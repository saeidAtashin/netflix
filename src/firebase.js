import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4yrItfmlYAJ7YqLxTFjkwnd69JcywCJY",
  authDomain: "netflix2-b865d.firebaseapp.com",
  projectId: "netflix2-b865d",
  storageBucket: "netflix2-b865d.appspot.com",
  messagingSenderId: "441387390853",
  appId: "1:441387390853:web:74e48cfd5602d7103896ec",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };