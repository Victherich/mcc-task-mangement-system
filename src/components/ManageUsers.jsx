
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { db } from '../firebaseConfig';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc
} from 'firebase/firestore';
import Swal from 'sweetalert2';

// --- Styling ---
const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const UserCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const Text = styled.p`
  margin: 0.3rem 0;
`;

const DeleteButton = styled.button`
  background: #FFDE59;
  color: #222;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background: #0CC1E0;
  }
`;

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
//   const [adminCheckDone, setAdminCheckDone] = useState(false);

//   // Check if current user is an admin
//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       if (currentUser) {
//         const adminRef = doc(db, 'admins', currentUser.uid);
//         const adminSnap = await getDoc(adminRef);

//         if (!adminSnap.exists() || adminSnap.data().role !== 'admin') {
//           await signOut(auth);
//           Swal.fire({
//             icon: 'error',
//             title: 'Access Denied',
//             text: 'Only admins can access this page.',
//           });
//           return;
//         }

//         fetchUsers(); // Only fetch users if admin verified
//         setAdminCheckDone(true);
//       } else {
//         Swal.fire({
//           icon: 'info',
//           title: 'Not Logged In',
//           text: 'Please login as an admin to access.',
//         });
//       }
//     });

//     return () => unsubscribe();
//   }, []);



useEffect(()=>{
fetchUsers()
},[])

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (userId) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This user will be permanently deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      try {
        await deleteDoc(doc(db, 'users', userId));
        setUsers(prev => prev.filter(user => user.id !== userId));
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire('Error', 'Failed to delete user.', 'error');
      }
    }
  };

//   if (!adminCheckDone) {
//     return <Container><p>Checking admin permissions...</p></Container>;
//   }

  return (
    <Container>
      <h2 style={{color:"#0CC1E0"}}>All Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map(user => (
          <UserCard key={user.id}>
            <Text><strong>Name:</strong> {user.name || 'N/A'}</Text>
            <Text><strong>Email:</strong> {user.email || 'N/A'}</Text>
            <Text><strong>Phone:</strong> {user.phone || 'N/A'}</Text>
            <DeleteButton onClick={() => handleDelete(user.id)}>Delete User</DeleteButton>
          </UserCard>
        ))
      )}
    </Container>
  );
};

export default ManageUsers;
