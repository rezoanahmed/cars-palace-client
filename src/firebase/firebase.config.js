// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABbRvUzkWqe8jtkjWbksLaDyRyQXJs8hk",
  authDomain: "cars-palace.firebaseapp.com",
  projectId: "cars-palace",
  storageBucket: "cars-palace.appspot.com",
  messagingSenderId: "111599661518",
  appId: "1:111599661518:web:df68fdf0931551b5547b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);