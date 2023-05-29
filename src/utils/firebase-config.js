import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWrCXYdAJtX0IUuyG-37edJo0ZR8s8btk",
  authDomain: "react-netflix-clone-e406e.firebaseapp.com",
  projectId: "react-netflix-clone-e406e",
  storageBucket: "react-netflix-clone-e406e.appspot.com",
  messagingSenderId: "206399597426",
  appId: "1:206399597426:web:d56d4cb496e7f0ce508beb",
  measurementId: "G-K2D2B0N32J"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);