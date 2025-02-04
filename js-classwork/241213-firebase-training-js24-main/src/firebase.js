import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2rSxCwg-_Crgli7oqcE1BF-EmmUmzl4w",
  authDomain: "quick-test-78f7c.firebaseapp.com",
  projectId: "quick-test-78f7c",
  storageBucket: "quick-test-78f7c.firebasestorage.app",
  messagingSenderId: "733318848777",
  appId: "1:733318848777:web:d2737d470a6e45e09433d8"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export {
    app
}
