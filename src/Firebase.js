import firebase from "firebase/compat/app";

import { getFirestore } from "firebase/firestore/lite";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWLNHDIsb7qBvlGjR85l7CNSItc8dJsJk",
  authDomain: "eshop-bbb67.firebaseapp.com",
  projectId: "eshop-bbb67",
  storageBucket: "eshop-bbb67.appspot.com",
  messagingSenderId: "966960448430",
  appId: "1:966960448430:web:a3d975beec17cbb616be3f",
  measurementId: "G-HSR8V80PDR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export {auth, db}
