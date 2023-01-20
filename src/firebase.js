import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD4yrItfmlYAJ7YqLxTFjkwnd69JcywCJY",
    authDomain: "netflix2-b865d.firebaseapp.com",
    projectId: "netflix2-b865d",
    storageBucket: "netflix2-b865d.appspot.com",
    messagingSenderId: "441387390853",
    appId: "1:441387390853:web:74e48cfd5602d7103896ec"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.fireStore();


  const auth = firebase.auth();

  export { auth };
  export default db;

