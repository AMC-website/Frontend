// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyARCF1xMGsHdM2lVRLCda-Ws5QF0kORfyQ',
    authDomain: 'amc-frontend.firebaseapp.com',
    projectId: 'amc-frontend',
    storageBucket: 'amc-frontend.firebasestorage.app',
    messagingSenderId: '691134730253',
    appId: '1:691134730253:web:d21d9762c5cb65a2f68544',
    measurementId: 'G-XJZXGEQGLQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
