// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl1v27bF3R09-cSObspG9M_G9p_FW6bqM",
  authDomain: "shoppy-web-9334a.firebaseapp.com",
  projectId: "shoppy-web-9334a",
  storageBucket: "shoppy-web-9334a.appspot.com",
  messagingSenderId: "120593189897",
  appId: "1:120593189897:web:c1c3d1e756824ca4e87cd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
