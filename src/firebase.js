import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqqHUWXAMcHdLuYdmRQ6N6-o7WyrI0ZsA",
  authDomain: "vaartalaap007.firebaseapp.com",
  projectId: "vaartalaap007",
  storageBucket: "vaartalaap007.appspot.com",
  messagingSenderId: "1040743426950",
  appId: "1:1040743426950:web:7724795595c96ff4c71a07",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
