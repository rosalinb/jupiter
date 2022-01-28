import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import firebaseui from "firebaseui";

const initialiseFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAp2lZeMPh8o-ZaOe_08tAoszfqP-InA4Q",
    authDomain: "jupiter-895fe.firebaseapp.com",
    projectId: "jupiter-895fe",
    storageBucket: "jupiter-895fe.appspot.com",
    messagingSenderId: "838286147878",
    appId: "1:838286147878:web:23a568d1d98e652b3dc1e7",
    measurementId: "G-M7Q0C7JQ13",
  };

  firebase.initializeApp(firebaseConfig);
};

export default initialiseFirebase;
