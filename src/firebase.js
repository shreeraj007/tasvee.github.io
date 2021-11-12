import firebase from "firebase";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBwwuk09TdnvjybPT9ZSAqyVkhs9e-WYpM",
    authDomain: "tasvee-8b1d4.firebaseapp.com",
    projectId: "tasvee-8b1d4",
    storageBucket: "tasvee-8b1d4.appspot.com",
    messagingSenderId: "424419422392",
    appId: "1:424419422392:web:e1053dde4b688eca41444d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};