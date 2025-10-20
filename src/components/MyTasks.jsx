



// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { db } from '../firebaseConfig';
// import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
// import Swal from 'sweetalert2';

// // --- Styled Components ---

// const PageWrapper = styled.div`
//   max-width: 800px;
//   margin: 2rem auto;
//   padding: 1rem;
// `;

// const Title = styled.h2`
//   margin-bottom: 1.5rem;
//   color: #119458;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1.5rem;
//   flex-wrap: wrap;
// `;

// const SearchInput = styled.input`
//   padding: 0.6rem 1rem;
//   border: 1px solid #CBD5E1;
//   border-radius: 8px;
//   font-size: 0.95rem;
//   width: 250px;
//   outline: none;
//   transition: all 0.2s ease;
//   &:focus {
//     border-color: #119458;
//     box-shadow: 0 0 0 2px rgba(17, 148, 88, 0.15);
//   }
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
//   & > select {
//     width: 100%;
//     padding: 0.5rem;
//     border: 1px solid #CBD5E1;
//     border-radius: 4px;
//     font-size: 0.95rem;
//   }
// `;


// // --- Component ---
// const MyTasks = ({ storedUserId }) => {
//   const [tasks, setTasks] = useState([]);
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     if (storedUserId) {
//       fetchTasksForUser(storedUserId);
//     }
//   }, [storedUserId]);

//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredTasks(tasks);
//     } else {
//       const filtered = tasks.filter(task =>
//         task.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredTasks(filtered);
//     }
//   }, [searchQuery, tasks]);

//   const fetchTasksForUser = async (userId) => {
//     setLoading(true);
//     const snapshot = await getDocs(collection(db, 'tasks'));
//     const allTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     const userTasks = allTasks.filter(task => task.assignedTo === userId);
//     setTasks(userTasks);
//     setFilteredTasks(userTasks);
//     setLoading(false);
//   };

//   const handleStatusChange = async (taskId, newStatus) => {
//     try {
//       const taskRef = doc(db, 'tasks', taskId);
//       await updateDoc(taskRef, {
//         status: newStatus,
//         updatedAt: new Date(),
//       });

//       setTasks(prev =>
//         prev.map(task =>
//           task.id === taskId ? { ...task, status: newStatus, updatedAt: new Date() } : task
//         )
//       );

//       Swal.fire({
//         icon: 'success',
//         title: 'Status Updated',
//         text: 'Task status has been updated.',
//         allowOutsideClick:false
//       }).then((result)=>{if(result.isConfirmed){
//         fetchTasksForUser(storedUserId);
//       }})
//     } catch (err) {
//       console.error('Failed to update task status:', err);
//       Swal.fire({
//         icon: 'error',
//         title: 'Update Failed',
//         text: 'Unable to update task status.',
//       });
//     }
//   };

//   return (
//     <PageWrapper>
//       <Header>
//         <Title>My Tasks</Title>
//         <SearchInput
//           type="text"
//           placeholder="Search by title..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </Header>

//       {loading ? (
//         <p>Loading tasks...</p>
//       ) : filteredTasks.length === 0 ? (
//         <p>No tasks found.</p>
//       ) : (
//         filteredTasks.map(t => (
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
  color: #0CC1E0;
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
    border-color: #0CC1E0;
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
  color: #0CC1E0;
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

const Button = styled.button`
  background-color: #0CC1E0;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #FFDE59;
  }
`;

const CompletionImagesContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background-color:red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
  &:hover {
    background-color: red;
    color: white;
  }
`;

const CompletionImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const FullscreenButton = styled.button`
  display: block;
  width: 100%;
  background-color: #0CC1E0;
  color: white;
  border: none;
  border-radius: 0 0 8px 8px;
  padding: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    background-color:#FFDE59;
  }
`;

/* === Modal Styles === */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.2s ease-in-out;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: 0 0 20px rgba(255,255,255,0.3);
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: rgba(255,255,255,0.9);
  color: black;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #FFDE59;
    color: white;
  }
`;

// --- Component ---
const MyTasks = ({ storedUserId }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [fullscreenUrl, setFullscreenUrl] = useState(null); // 🟢 Modal state

  useEffect(() => {
    if (storedUserId) fetchTasksForUser(storedUserId);
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
      await updateDoc(taskRef, { status: newStatus, updatedAt: new Date() });

      Swal.fire({
        icon: 'success',
        title: 'Status Updated',
        text: 'Task status has been updated.',
        allowOutsideClick: false,
      }).then(() => fetchTasksForUser(storedUserId));
    } catch (err) {
      console.error('Failed to update task status:', err);
      Swal.fire('Error', 'Unable to update task status.', 'error');
    }
  };

  const handleAddCompletionPhoto = async (taskId) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.onchange = async (e) => {
      const files = Array.from(e.target.files);
      if (!files.length) return;

      Swal.fire({
        text: 'Uploading completion photos...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      try {
        const uploadedUrls = [];
        for (const file of files) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'matthew car wash and cleaning website');
          formData.append('cloud_name', 'dzshme0rg');

          const res = await fetch(`https://api.cloudinary.com/v1_1/dzshme0rg/image/upload`, {
            method: 'POST',
            body: formData,
          });

          const data = await res.json();
          if (!res.ok) throw new Error(data.error?.message || 'Upload failed');
          uploadedUrls.push(data.secure_url);
        }

        const taskRef = doc(db, 'tasks', taskId);
        const task = tasks.find(t => t.id === taskId);
        const existing = task.completionPhotos || [];

        await updateDoc(taskRef, {
          completionPhotos: [...existing, ...uploadedUrls],
          updatedAt: new Date(),
        });

        Swal.fire('Success', 'Completion photos uploaded successfully!', 'success');
        fetchTasksForUser(storedUserId);
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'Failed to upload photos.', 'error');
      }
    };

    input.click();
  };

  const handleDeletePhoto = async (taskId, photoUrl) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this photo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (!result.isConfirmed) return;

      try {
        const taskRef = doc(db, 'tasks', taskId);
        const task = tasks.find(t => t.id === taskId);
        const updatedPhotos = (task.completionPhotos || []).filter(url => url !== photoUrl);

        await updateDoc(taskRef, { completionPhotos: updatedPhotos, updatedAt: new Date() });
        Swal.fire('Deleted!', 'Photo has been deleted.', 'success');
        fetchTasksForUser(storedUserId);
      } catch (err) {
        console.error(err);
        Swal.fire('Error', 'Failed to delete photo.', 'error');
      }
    });
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

            <Field   style={{
                backgroundColor: t.status === "Pending" ? "red" : "green",
                padding: "5px",
                borderRadius: "5px",
                color: "white"
              }}>
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

            <Button onClick={() => handleAddCompletionPhoto(t.id)}>Add Completion Photos</Button>

            {t.completionPhotos && t.completionPhotos.length > 0 && (
              <CompletionImagesContainer>
                {t.completionPhotos.map((url, index) => (
                  <ImageWrapper key={index}>
                    <DeleteButton onClick={() => handleDeletePhoto(t.id, url)}>X</DeleteButton>
                    <CompletionImage src={url} alt="Completion" />
                    <FullscreenButton onClick={() => setFullscreenUrl(url)}>
                      View Fullscreen
                    </FullscreenButton>
                  </ImageWrapper>
                ))}
              </CompletionImagesContainer>
            )}
          </TaskCard>
        ))
      )}

      {/* 🟢 Fullscreen Modal */}
      {fullscreenUrl && (
        <ModalOverlay onClick={() => setFullscreenUrl(null)}>
          <CloseModalButton onClick={() => setFullscreenUrl(null)}>×</CloseModalButton>
          <ModalImage src={fullscreenUrl} alt="Fullscreen" />
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export default MyTasks;
