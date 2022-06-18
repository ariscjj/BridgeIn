// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 


// import { db } from "./firebase/firebase";

import { getFirestore } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY6I6yBl9NSgPGRBY6JO2asIYlrxg9Hu0",
  authDomain: "ix-test-91013.firebaseapp.com",
  projectId: "ix-test-91013",
  storageBucket: "ix-test-91013.appspot.com",
  messagingSenderId: "497933378011",
  appId: "1:497933378011:web:68c519228f74b16d0387fe",
  measurementId: "G-5TPK44EJX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const auth = getAuth(app);

// console.log(db)

export{
  db, 
  auth
}; 

//const analytics = getAnalytics(app);
