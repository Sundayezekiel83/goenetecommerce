import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuEj8RjqgsL6w6JfZpNfoQ89c36iSnG8c",
  authDomain: "geonetweb-32a58.firebaseapp.com",
  projectId: "geonetweb-32a58",
  storageBucket: "geonetweb-32a58.appspot.com",
  messagingSenderId: "325672615643",
  appId: "1:325672615643:web:a68b60bb182484f48f56fe",
  measurementId: "G-BBHQC5NZE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage();

export { db, storage };
