// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkF1ZvrxCcHlYXL-JsHf3CLr3TEi8wtcE",
  authDomain: "coffee-store-app-48dad.firebaseapp.com",
  projectId: "coffee-store-app-48dad",
  storageBucket: "coffee-store-app-48dad.firebasestorage.app",
  messagingSenderId: "293987621431",
  appId: "1:293987621431:web:03b03a854549ee7f40fdb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);