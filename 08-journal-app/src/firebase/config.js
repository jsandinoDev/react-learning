// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIRESTORE_API,
//     authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGINGSENDERID,
//     appId: import.meta.env.VITE_FIRESTORE_APP_ID,
// };


const firebaseConfig = {
    apiKey: "AIzaSyCPW2jOay_PIRHTt9VZCSmRaZsfJ4L7U8o",
    authDomain: "react-learning-925d3.firebaseapp.com",
    projectId: "react-learning-925d3",
    storageBucket: "react-learning-925d3.firebasestorage.app",
    messagingSenderId: "477484163780",
    appId: "1:477484163780:web:d0e99e12bb09c57226df91"
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);