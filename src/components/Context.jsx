// import React, { createContext, useEffect, useState } from 'react'

// import Swal from 'sweetalert2';
// import { db } from '../components/lib/firebase'; // adjust path if needed
// import { collection, getDocs } from 'firebase/firestore';

// // Example usage:
// // const appRef = collection(db, 'apps_versions');



// export const Context = createContext();


// const ContextProvider = ({children}) => {

// const say = 'yes'


// const [apps, setApps] = useState([]);
// const [lastVersions, setLastVersions] = useState({});
// const appRef = collection(db, 'apps_versions');

// const fetchApps = async (showAlertOnChange = false) => {
//   const data = await getDocs(appRef);
//   const fetchedApps = data.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   if (showAlertOnChange) {
//     fetchedApps.forEach((app) => {
//       const prevVersion = lastVersions[app.appId];
//       if (prevVersion && prevVersion !== app.version) {
//         Swal.fire({
//           title: `${app.name} has a new version!`,
//           text: `Current: ${prevVersion}, New: ${app.version}`,
//           icon: 'info',
//           confirmButtonText: 'Refresh',
//         }).then(() => window.location.reload());
//       }
//     });
//   }

//   const versionMap = {};
//   fetchedApps.forEach((app) => {
//     versionMap[app.appId] = app.version;
//   });

//   setLastVersions(versionMap);
//   setApps(fetchedApps);
// };

// useEffect(() => {
//   fetchApps(); // Initial fetch
//   const interval = setInterval(() => fetchApps(true), 2000);
//   return () => clearInterval(interval);
// }, []);

// console.log(apps)

//   return (
//     <Context.Provider value={{ say}}>
//       {children}
//     </Context.Provider>
//   )
// }

// export default ContextProvider






// import React, { createContext, useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { db } from '../components/lib/firebase';
// import { collection, getDocs } from 'firebase/firestore';

// export const Context = createContext();

// const ContextProvider = ({ children }) => {
//   const [apps, setApps] = useState([]);
//   const appRef = collection(db, 'apps_versions');

//   const fetchApps = async (showAlertOnChange = false) => {
//     const data = await getDocs(appRef);
//     const fetchedApps = data.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     // Get last versions from localStorage
//     const storedVersions = JSON.parse(localStorage.getItem('app_versions') || '{}');

//     // Compare versions and show alert if needed
//     if (showAlertOnChange) {
//       fetchedApps.forEach((app) => {
//         const prevVersion = storedVersions[app.appId];
//         if (prevVersion && prevVersion !== app.version) {
//           Swal.fire({
//             title: `This site has a new update by the Developer!`,
//             text: `Kindly click the 'UPDATE" button to catch up`,
//             icon: 'info',
//             confirmButtonText: 'Update',
//             showCancelButton:true,
//             cancelButtonText:'Remind me later'
//           }).then((result) =>{
//             if(result.isConfirmed){
//                  window.location.reload();
//   // Save the new versions to localStorage
//   const versionMap = {};
//   fetchedApps.forEach((app) => {
//     versionMap[app.appId] = app.version;
//   });
//   localStorage.setItem('app_versions', JSON.stringify(versionMap));

//   setApps(fetchedApps);

//           }});
//         }
//       });
//     }

  
//   };

//   useEffect(() => {
//     fetchApps(); // initial fetch
//     const interval = setInterval(() => fetchApps(true), 5*60*1000); // every 5 minutes
//     return () => clearInterval(interval);
//   }, []);

// //   useEffect(()=>{
// //     fetchApps(); // initial fetch
// //   },[])

//   console.log(apps)

//   return (
//     <Context.Provider value={{ apps }}>
//       {children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;



import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';


export const Context = createContext();

const ContextProvider = ({ children }) => {


  return (
    <Context.Provider value={{  }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;



// paypal payment test acount
// email: sb-i43rw634801674@personal.example.com
// pw: [%5/YuRk
