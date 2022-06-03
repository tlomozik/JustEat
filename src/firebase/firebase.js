// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA1esTLZqfAb-EFv-SwRA-7PKFDWeNHVs",
  authDomain: "deft-effect-348109.firebaseapp.com",
  projectId: "deft-effect-348109",
  storageBucket: "deft-effect-348109.appspot.com",
  messagingSenderId: "977378849804",
  appId: "1:977378849804:web:2fe3e7d750cb0565052a29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
