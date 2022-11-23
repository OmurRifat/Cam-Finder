// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBX1SrwFpOA75JD8ti_jkvLGsIUXKfYwww",
    authDomain: "cam-finder.firebaseapp.com",
    projectId: "cam-finder",
    storageBucket: "cam-finder.appspot.com",
    messagingSenderId: "66797003630",
    appId: "1:66797003630:web:a0eeaa9a9b0484ae25977f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);