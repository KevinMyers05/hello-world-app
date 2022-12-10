export const environment = {
  production: true
};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2GGHbX05r9U6ArPMOc5pnKg6B1u1DH7E",
  authDomain: "bulbapedia-235e6.firebaseapp.com",
  databaseURL: "https://bulbapedia-235e6-default-rtdb.firebaseio.com",
  projectId: "bulbapedia-235e6",
  storageBucket: "bulbapedia-235e6.appspot.com",
  messagingSenderId: "310590459077",
  appId: "1:310590459077:web:f03282dbee8a1dc021f4ac",
  measurementId: "G-9K9BL2HS59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);