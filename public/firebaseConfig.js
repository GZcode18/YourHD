// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg9Mk2GKbhZYwNxYE-fSdZ30NBrPHXgdQ",
  authDomain: "yourhd-11402.firebaseapp.com",
  projectId: "yourhd-11402",
  storageBucket: "yourhd-11402.firebasestorage.app",
  messagingSenderId: "147893805042",
  appId: "1:147893805042:web:ef09e0c4679e99db74556b",
  measurementId: "G-3ZQBSV811S"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, signInWithPopup, provider };
