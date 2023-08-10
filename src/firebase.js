// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZb_xIGkUvQMWC3ZBGKJC-yiIBIC4n4KY",
  authDomain: "snapdeal-clone-cbe3e.firebaseapp.com",
  projectId: "snapdeal-clone-cbe3e",
  storageBucket: "snapdeal-clone-cbe3e.appspot.com",
  messagingSenderId: "179260009621",
  appId: "1:179260009621:web:8e802bb6015845dcf4bf9c",
  measurementId: "G-LJX3XEV7EX",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
