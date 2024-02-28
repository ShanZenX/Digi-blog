// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgc9t_fC1IgDjzGRsbG8KK_n-I8twCHr8",
  authDomain: "digiblog-be185.firebaseapp.com",
  projectId: "digiblog-be185",
  storageBucket: "digiblog-be185.appspot.com",
  messagingSenderId: "62789751853",
  appId: "1:62789751853:web:b3f575c6a6f179e31d54a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);