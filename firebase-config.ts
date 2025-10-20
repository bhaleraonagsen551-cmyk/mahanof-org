// firebase-config.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5bcjUpsUa5C6qRoqcnXFFXzMnbtv6e-U",
  authDomain: "nursing-officers-foundation.firebaseapp.com",
  projectId: "nursing-officers-foundation",
  storageBucket: "nursing-officers-foundation.firebasestorage.app",
  messagingSenderId: "709230883781",
  appId: "1:709230883781:web:c7d6f3d305e3f6003d11ac",
  measurementId: "G-WWC8R30612"
};

// Initialize Firebase
// This check prevents re-initializing the app on hot reloads
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
