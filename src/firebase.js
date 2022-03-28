import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHTOx80rETDkxJ_ZQp5b9sqYHC6OGYJUg",
  authDomain: "c-2c907.firebaseapp.com",
  projectId: "c-2c907",
  storageBucket: "c-2c907.appspot.com",
  messagingSenderId: "396939549818",
  appId: "1:396939549818:web:deb5748f4f09c151362fc3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
