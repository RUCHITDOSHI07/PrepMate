// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeTn78nc5DjUVzDdv4h4d-lJeW-de-6_w",
  authDomain: "prepmate-24bba.firebaseapp.com",
  projectId: "prepmate-24bba",
  storageBucket: "prepmate-24bba.firebasestorage.app",
  messagingSenderId: "435996764076",
  appId: "1:435996764076:web:a738fe631e96cd30803c09",
  measurementId: "G-Y0BWQERRR6"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);