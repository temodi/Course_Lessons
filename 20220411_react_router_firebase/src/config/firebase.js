// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfC91rVx65IWPbRoKaBpnFpJv2sSwQXw4",
  authDomain: "personalpage-f84c4.firebaseapp.com",
  databaseURL: "https://personalpage-f84c4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "personalpage-f84c4",
  storageBucket: "personalpage-f84c4.appspot.com",
  messagingSenderId: "647232468256",
  appId: "1:647232468256:web:6d2a147d94d4ae5af35345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);