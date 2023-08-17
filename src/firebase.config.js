// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3lGbGE3-aYukiyLvtz6A04P6DcDqWi2s",
  authDomain: "house-marketplace-app-bf314.firebaseapp.com",
  projectId: "house-marketplace-app-bf314",
  storageBucket: "house-marketplace-app-bf314.appspot.com",
  messagingSenderId: "218919058781",
  appId: "1:218919058781:web:62dade97c2329d1917fcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()