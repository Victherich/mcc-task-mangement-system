


// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// // New Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKDSt8wsV1u-wh--qr4oSFG5okKsDwm9w",
//   authDomain: "quadrikdigitmarketing-website.firebaseapp.com",
//   projectId: "quadrikdigitmarketing-website",
//   storageBucket: "quadrikdigitmarketing-website.appspot.com", // ✅ corrected .app to .appspot.com
//   messagingSenderId: "663902567298",
//   appId: "1:663902567298:web:20a6cd3bf98dbec3f26d9b",
//   measurementId: "G-9D8TNB835Y"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Optional: Enable Analytics (only works in browser environments with HTTPS)
// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }

// // Export services
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export { analytics };






// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ✅ Your updated Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD_UARANWvdIF4YfVHu6NGU9sullXug2kM",
  authDomain: "matthew-car-wash-and-cleaning.firebaseapp.com",
  projectId: "matthew-car-wash-and-cleaning",
  storageBucket: "matthew-car-wash-and-cleaning.appspot.com", // ⚠️ fixed ".app" to ".appspot.com"
  messagingSenderId: "1042442426170",
  appId: "1:1042442426170:web:47c60feae9144aaeb7a203",
  measurementId: "G-SXEFTW2NWR"
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
