import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  "projectId": "stutis-showcase",
  "appId": "1:357711865237:web:0a1aa7d0415c9c10bec29c",
  "storageBucket": "stutis-showcase.firebasestorage.app",
  "apiKey": "AIzaSyDDea3W_8a92CBO2Fyoo7XF2yy21EqpUd0",
  "authDomain": "stutis-showcase.firebaseapp.com",
  "messagingSenderId": "357711865237"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
