

import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Make sure this points to your Firebase config file


const PrivateAdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user); // true if user is logged in
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (loading) return <p>Loading...</p>;

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};







// // Admin guard
// const PrivateAdminDashboard = () => {
//   const [loading, setLoading] = useState(true);
//   const [authorized, setAuthorized] = useState(false);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       const role = localStorage.getItem("role");
//       setAuthorized(user && role === "admin");
//       setLoading(false);
//     });
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return authorized ? <Outlet /> : <Navigate to="/adminlogin" />;
// };







export default PrivateAdminDashboard;

