// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9AzYfPwHGNVNKA9uIkUEBdLJUfzGW73Q",
  authDomain: "mystockportfolio-c8478.firebaseapp.com",
  databaseURL: "https://mystockportfolio-c8478-default-rtdb.firebaseio.com",
  projectId: "mystockportfolio-c8478",
  storageBucket: "mystockportfolio-c8478.appspot.com",
  messagingSenderId: "53577328697",
  appId: "1:53577328697:web:2db39c3cf143a3c2b7c5e8",
  measurementId: "G-RVB6TTK6J8"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, analytics, db};


