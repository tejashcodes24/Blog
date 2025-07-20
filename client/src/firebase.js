// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-85801.firebaseapp.com",
  projectId: "mern-blog-85801",
  storageBucket: "mern-blog-85801.firebasestorage.app",
  messagingSenderId: "799253388289",
  appId: "1:799253388289:web:4cfcf24b2238f0214d3400"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);