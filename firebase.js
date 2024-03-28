import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyApV_LToXxvDKP1LH2C4w3Ns1o_Tpg8mtE",
  authDomain: "react-notes-908f1.firebaseapp.com",
  projectId: "react-notes-908f1",
  storageBucket: "react-notes-908f1.appspot.com",
  messagingSenderId: "593256416694",
  appId: "1:593256416694:web:3617b49bb0b3da1b652d17"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
