import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALgMftnulLoguJKoP0SpBlD37nxqmPh_E",
  authDomain: "investqi-b751e.firebaseapp.com",
  projectId: "investqi-b751e",
  storageBucket: "investqi-b751e.firebasestorage.app",
  messagingSenderId: "43505719333",
  appId: "1:43505719333:web:e80450c4df0b57840b87cc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();