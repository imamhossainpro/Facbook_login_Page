// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCsNtxFZC23uXkKqxD5NvctA3Gi8pjvSxo",
  authDomain: "fbuser-888ad.firebaseapp.com",
  projectId: "fbuser-888ad",
  storageBucket: "fbuser-888ad.appspot.com",
  messagingSenderId: "92861110584",
  appId: "1:92861110584:web:b0ca2627a3b70e347589cd",
  measurementId: "G-1027XT23SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 
