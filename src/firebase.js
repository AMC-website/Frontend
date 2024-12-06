// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCnIjiL0v1fqtP9ywKcN2TmxFQ5D2yOHn4',
    authDomain: 'amc-blogs-content.firebaseapp.com',
    databaseURL: 'https://amc-blogs-content-default-rtdb.firebaseio.com',
    projectId: 'amc-blogs-content',
    storageBucket: 'amc-blogs-content.firebasestorage.app',
    messagingSenderId: '587658818641',
    appId: '1:587658818641:web:45fe937af687635a64f470',
    measurementId: 'G-N93GCQNH8K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
