
// src/lib/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa4iLMXTB93Co7VvSBgaWAmgTytn0wORM",
  authDomain: "echobyte-projects-control.firebaseapp.com",
  projectId: "echobyte-projects-control",
  storageBucket: "echobyte-projects-control.appspot.com",
  messagingSenderId: "259129323461",
  appId: "1:259129323461:web:264a1bf24e886c8f8065ac",
  measurementId: "G-YGWMBT74E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
