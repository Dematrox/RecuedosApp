// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPfmfOjyHnGaMkN92NmbPgDCALX3vrg6A",
  authDomain: "react-curso-19945.firebaseapp.com",
  projectId: "react-curso-19945",
  storageBucket: "react-curso-19945.appspot.com",
  messagingSenderId: "934430184374",
  appId: "1:934430184374:web:43d38465496d9184242717"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );