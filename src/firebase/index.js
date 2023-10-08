// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1R8yCOX6kr6LRiZVSwTXCCy069tVIGjQ",
    authDomain: "renovation-budget-management.firebaseapp.com",
    projectId: "renovation-budget-management",
    storageBucket: "renovation-budget-management.appspot.com",
    messagingSenderId: "708113890957",
    appId: "1:708113890957:web:ee36aac46758bd7c0aacc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
