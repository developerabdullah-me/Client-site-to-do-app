// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7JUPeaom24FsXiJkBNCgEXMHURyHf_TI",
  authDomain: "to-do-dde13.firebaseapp.com",
  projectId: "to-do-dde13",
  storageBucket: "to-do-dde13.appspot.com",
  messagingSenderId: "409774826976",
  appId: "1:409774826976:web:65a8146eb7ebaf7f62f785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth