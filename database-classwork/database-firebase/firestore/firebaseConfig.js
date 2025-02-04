// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2rSxCwg-_Crgli7oqcE1BF-EmmUmzl4w",
  authDomain: "quick-test-78f7c.firebaseapp.com",
  databaseURL: "https://quick-test-78f7c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quick-test-78f7c",
  storageBucket: "quick-test-78f7c.firebasestorage.app",
  messagingSenderId: "733318848777",
  appId: "1:733318848777:web:fee4bfb16335a3fb9433d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

