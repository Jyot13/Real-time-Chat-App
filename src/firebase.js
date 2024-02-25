import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeODc44GZ8sAQEll29GEhTS9xVKYgXrRU",
  authDomain: "chat-9a8e7.firebaseapp.com",
  projectId: "chat-9a8e7",
  storageBucket: "chat-9a8e7.appspot.com",
  messagingSenderId: "116603214693",
  appId: "1:116603214693:web:36aad223732ec600925f8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
