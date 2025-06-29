


// import React, { useEffect, useState } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebaseConfig'; // Make sure this points to your Firebase config file


// const PrivateUserDashboard = () => {
//   const [loading, setLoading] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAuthenticated(!!user); // true if user is logged in
//       setLoading(false);
//     });

//     return () => unsubscribe(); // Cleanup listener on unmount
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return authenticated ? <Outlet /> : <Navigate to="/userlogin" />;
// };

// export default PrivateUserDashboard;




import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateUserDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate checking login status from localStorage
    const userData = localStorage.getItem("user");
    setAuthenticated(!!userData); // true if user exists in storage
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return authenticated ? <Outlet /> : <Navigate to="/userlogin" />;
};

export default PrivateUserDashboard;


