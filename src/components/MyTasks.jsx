
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { db } from '../firebaseConfig';
// import { collection, getDocs , doc, updateDoc } from 'firebase/firestore';
// import Swal from 'sweetalert2';


// // Styled Components
// const PageWrapper = styled.div`
//   max-width: 800px;
//   margin: 2rem auto;
//   padding: 1rem;
// `;

// const Title = styled.h2`
//   margin-bottom: 1.5rem;
//   color: #119458;
// `;

// const TaskCard = styled.div`
//   background: #fff;
//   border: 1px solid #e0e0e0;
//   padding: 1.2rem;
//   border-radius: 8px;
//   margin-bottom: 1rem;
//   box-shadow: 0 2px 5px rgba(0,0,0,0.05);
// `;

// const TaskTitle = styled.h3`
//   margin: 0;
//   color: #119458;
// `;

// const TaskInfo = styled.p`
//   margin: 0.4rem 0;
//   font-size: 0.95rem;
// `;


// const Field = styled.div`
//   margin-bottom: 1rem;
//   & > label {
//     display: block;
//     margin-bottom: 0.3rem;
//     font-weight: 600;
//   }
//   & > input,
//   & > textarea,
//   & > select {
//     width: 100%;
//     padding: 0.5rem;
//     border: 1px solid #CBD5E1;
//     border-radius: 4px;
//     font-size: 0.95rem;
//   }
//   & > textarea {
//     resize: vertical;
//     min-height: 80px;
//   }
// `;




// // const MyTasks = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [loading, setLoading] = useState(true);
// // //   const auth = getAuth();

// // const storedUserId = JSON.parse(localStorage.getItem("user")); // stored as JSON string


// //   useEffect(() => {
// //     if (storedUserId) {
// //       fetchTasksForUser(storedUserId);
// //     }
// //   }, [storedUserId]);

// //   const fetchTasksForUser = async (userId) => {
// //     setLoading(true);
// //     const snapshot = await getDocs(collection(db, 'tasks'));
// //     const allTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //     const userTasks = allTasks.filter(task => task.assignedTo === userId);
// //     setTasks(userTasks);
// //     setLoading(false);
// //   };

// //   if (!storedUserId) {
// //     return <PageWrapper><p>You must be logged in to view your tasks.</p></PageWrapper>;
// //   }

// //   return (
// //     <PageWrapper>
// //       <Title>My Tasks</Title>

// //       {loading ? (
// //         <p>Loading tasks...</p>
// //       ) : tasks.length === 0 ? (
// //         <p>No tasks assigned to you.</p>
// //       ) : (
// //         tasks.map(t => (
// //           <TaskCard key={t.id}>
// //             <TaskTitle>{t.title}</TaskTitle>
// //             <TaskInfo><strong>Description:</strong> {t.description}</TaskInfo>
// //             <TaskInfo><strong>Status:</strong> {t.status}</TaskInfo>
// //             <TaskInfo><strong>Due Date:</strong> {t.dueDate}</TaskInfo>
// //             <TaskInfo><strong>Created At:</strong> {t.createdAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>
// //             <TaskInfo><strong>Updated At:</strong> {t.updatedAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>
// //           </TaskCard>
// //         ))
// //       )}
// //     </PageWrapper>
// //   );
// // };

// // export default MyTasks;





// const MyTasks = ({storedUserId}) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

  

//   useEffect(() => {
//     if (storedUserId) {
//       fetchTasksForUser(storedUserId);
//     }
//   }, [storedUserId]);

//   const fetchTasksForUser = async (userId) => {
//     setLoading(true);
//     const snapshot = await getDocs(collection(db, 'tasks'));
//     const allTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     const userTasks = allTasks.filter(task => task.assignedTo === userId);
//     setTasks(userTasks);
//     setLoading(false);
//   };

//   const handleStatusChange = async (taskId, newStatus) => {
//     try {
//       const taskRef = doc(db, 'tasks', taskId);
//       await updateDoc(taskRef, {
//         status: newStatus,
//         updatedAt: new Date(),
//       });

//       // Update state locally after update
//       setTasks(prev =>
//         prev.map(task =>
//           task.id === taskId ? { ...task, status: newStatus, updatedAt: new Date() } : task
//         )
//       );
// fetchTasksForUser(storedUserId);
//       Swal.fire({
//         icon: 'success',
//         title: 'Status Updated',
//         text: 'Task status has been updated.',
//         timer: 1500,
//         showConfirmButton: false,
//       });

//     } catch (err) {
//       console.error("Failed to update task status:", err);
//       Swal.fire({
//         icon: 'error',
//         title: 'Update Failed',
//         text: 'Unable to update task status.',
//       });
//     }
//   };



//   return (
//     <PageWrapper>
//       <Title>My Tasks</Title>

//       {loading ? (
//         <p>Loading tasks...</p>
//       ) : tasks.length === 0 ? (
//         <p>No tasks assigned to you.</p>
//       ) : (
//         tasks.map(t => (
//           <TaskCard key={t.id}>
//             <TaskTitle>{t.title}</TaskTitle>
//             <TaskInfo><strong>Description:</strong> {t.description}</TaskInfo>
//             <TaskInfo><strong>Due Date:</strong> {t.dueDate}</TaskInfo>
//             <TaskInfo><strong>Created At:</strong> {t.createdAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>
//             <TaskInfo><strong>Updated At:</strong> {t.updatedAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>

//             <Field>
//               <label>Status</label>
//               <select
//                 name="status"
//                 value={t.status}
//                 onChange={(e) => handleStatusChange(t.id, e.target.value)}
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="Completed">Completed</option>
//               </select>
//             </Field>
//           </TaskCard>
//         ))
//       )}
//     </PageWrapper>
//   );
// };

// export default MyTasks;






import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebaseConfig';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

// --- Styled Components ---

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #119458;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  font-size: 0.95rem;
  width: 250px;
  outline: none;
  transition: all 0.2s ease;
  &:focus {
    border-color: #119458;
    box-shadow: 0 0 0 2px rgba(17, 148, 88, 0.15);
  }
`;

const TaskCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

const TaskTitle = styled.h3`
  margin: 0;
  color: #119458;
`;

const TaskInfo = styled.p`
  margin: 0.4rem 0;
  font-size: 0.95rem;
`;

const Field = styled.div`
  margin-bottom: 1rem;
  & > label {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 600;
  }
  & > select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #CBD5E1;
    border-radius: 4px;
    font-size: 0.95rem;
  }
`;


// --- Component ---
const MyTasks = ({ storedUserId }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (storedUserId) {
      fetchTasksForUser(storedUserId);
    }
  }, [storedUserId]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTasks(filtered);
    }
  }, [searchQuery, tasks]);

  const fetchTasksForUser = async (userId) => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, 'tasks'));
    const allTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const userTasks = allTasks.filter(task => task.assignedTo === userId);
    setTasks(userTasks);
    setFilteredTasks(userTasks);
    setLoading(false);
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      const taskRef = doc(db, 'tasks', taskId);
      await updateDoc(taskRef, {
        status: newStatus,
        updatedAt: new Date(),
      });

      setTasks(prev =>
        prev.map(task =>
          task.id === taskId ? { ...task, status: newStatus, updatedAt: new Date() } : task
        )
      );

      Swal.fire({
        icon: 'success',
        title: 'Status Updated',
        text: 'Task status has been updated.',
        allowOutsideClick:false
      }).then((result)=>{if(result.isConfirmed){
        fetchTasksForUser(storedUserId);
      }})
    } catch (err) {
      console.error('Failed to update task status:', err);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'Unable to update task status.',
      });
    }
  };

  return (
    <PageWrapper>
      <Header>
        <Title>My Tasks</Title>
        <SearchInput
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Header>

      {loading ? (
        <p>Loading tasks...</p>
      ) : filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map(t => (
          <TaskCard key={t.id}>
            <TaskTitle>{t.title}</TaskTitle>
            <TaskInfo><strong>Description:</strong> {t.description}</TaskInfo>
            <TaskInfo><strong>Due Date:</strong> {t.dueDate}</TaskInfo>
            <TaskInfo><strong>Created At:</strong> {t.createdAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>
            <TaskInfo><strong>Updated At:</strong> {t.updatedAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>

            <Field>
              <label>Status</label>
              <select
                name="status"
                value={t.status}
                onChange={(e) => handleStatusChange(t.id, e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </Field>
          </TaskCard>
        ))
      )}
    </PageWrapper>
  );
};

export default MyTasks;
