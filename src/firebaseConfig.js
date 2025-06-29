




// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// // ✅ Your updated Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyD_UARANWvdIF4YfVHu6NGU9sullXug2kM",
//   authDomain: "matthew-car-wash-and-cleaning.firebaseapp.com",
//   projectId: "matthew-car-wash-and-cleaning",
//   storageBucket: "matthew-car-wash-and-cleaning.appspot.com", // ⚠️ fixed ".app" to ".appspot.com"
//   messagingSenderId: "1042442426170",
//   appId: "1:1042442426170:web:47c60feae9144aaeb7a203",
//   measurementId: "G-SXEFTW2NWR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Optional: Analytics only works on web in production or over HTTPS
// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }

// // Export initialized services
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export { analytics };




// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ✅ Updated Firebase config from your provided credentials
const firebaseConfig = {
  apiKey: "AIzaSyAEPPofm8JNelRQLSSi7N3F33Q4gPYmeA8",
  authDomain: "matthew-task-management-system.firebaseapp.com",
  projectId: "matthew-task-management-system",
  storageBucket: "matthew-task-management-system.firebasestorage.app", // ⚠️ double-check if ".app" is correct; usually it's ".appspot.com"
  messagingSenderId: "572281504573",
  appId: "1:572281504573:web:02fa1ad6e589f78f96bb54",
  measurementId: "G-S90JC8DER0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Analytics only works on web in production or over HTTPS
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Export initialized services
export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };
