// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD36jvvOoQM2rTWNmAl8aJnKHWeXTsoHMM",
  authDomain: "crud-51c7e.firebaseapp.com",
  databaseURL: "https://crud-51c7e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crud-51c7e",
  storageBucket: "crud-51c7e.appspot.com",
  messagingSenderId: "844467403182",
  appId: "1:844467403182:web:31789e8365f2e656e5303f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app); // ez kell ahhoz hogy muveleteket tudjunk vegezni az adatbazison