import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgBNua_Bczhuq5734rfhM33HUOWoNuqVc",
  authDomain: "prepwise-69eba.firebaseapp.com",
  projectId: "prepwise-69eba",
  storageBucket: "prepwise-69eba.firebasestorage.app",
  messagingSenderId: "605640876283",
  appId: "1:605640876283:web:c9816200b354df9a5b505e",
  measurementId: "G-M425QG3R8X",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
