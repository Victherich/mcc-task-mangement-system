


import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebaseConfig';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore';
import Swal from 'sweetalert2';

// --- Styled Components ---

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  color: #0CC1E0;
`;

const SearchBar = styled.input`
  flex: 1;
  min-width: 220px;
  padding: 0.5rem 0.8rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #0CC1E0;
    box-shadow: 0 0 0 2px rgba(17, 148, 88, 0.2);
  }
`;

const AddButton = styled.button`
  background: #0CC1E0;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: #0e7a48;
  }
`;

const TaskCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const TaskTitle = styled.h3`
  margin: 0;
  color: #0CC1E0;
`;

const TaskInfo = styled.p`
  margin: 0.4rem 0;
  font-size: 0.95rem;
`;

const CardActions = styled.div`
  margin-top: 1rem;
  & > button {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  background: ${({ danger }) => (danger ? '#d9534f' : '#0CC1E0')};
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background: ${({ danger }) => (danger ? '#c9302c' : '#0e7a48')};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 500px;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
`;

const Field = styled.div`
  margin-bottom: 1rem;
  & > label {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 600;
  }
  & > input,
  & > textarea,
  & > select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #CBD5E1;
    border-radius: 4px;
    font-size: 0.95rem;
  }
  & > textarea {
    resize: vertical;
    min-height: 80px;
  }
`;

const ModalActions = styled.div`
  text-align: right;
  & > button {
    margin-left: 0.5rem;
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
    background-color:green;
  }
`;

/* === Modal Styles === */
const ModalOverlay2 = styled.div`
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
    background-color: red;
    color: white;
  }
`;

// --- Component Logic ---

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 for search
   const [fullscreenUrl, setFullscreenUrl] = useState(null); // 🟢 Modal state

  const [form, setForm] = useState({
    id: null,
    title: '',
    description: '',
    assignedTo: '',
    status: 'Pending',
    dueDate: ''
  });

  useEffect(() => {
    fetchUsers();
    fetchTasks();

    const id = setInterval(fetchTasks, 20000);
    return () => clearInterval(id);
  }, []);

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, 'users'));
    const userList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUsers(userList);
  };

  const fetchTasks = async () => {
    const snapshot = await getDocs(collection(db, 'tasks'));
    setTasks(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitTask = async () => {
    const { title, description, assignedTo, status, dueDate } = form;
    if (!title || !description || !assignedTo || !dueDate) {
      return Swal.fire('Missing Fields', 'Please complete all fields.', 'warning');
    }

    Swal.fire({
      title: isEdit ? 'Updating Task...' : 'Creating Task...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const data = { title, description, assignedTo, status, dueDate, updatedAt: serverTimestamp() };
      if (isEdit) {
        await updateDoc(doc(db, 'tasks', form.id), data);
      } else {
        await addDoc(collection(db, 'tasks'), {
          ...data,
          createdAt: serverTimestamp()
        });
      }
      Swal.fire('Success', `Task ${isEdit ? 'updated' : 'created'} successfully`, 'success');
      fetchTasks();
      closeModal();
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'An error occurred.', 'error');
    }
  };

  const initiateEdit = task => {
    setForm({ ...task, dueDate: task.dueDate || '' });
    setIsEdit(true);
    setModalOpen(true);
  };

  const deleteTask = async id => {
    const res = await Swal.fire({
      title: 'Delete Task?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete!',
    });
    if (res.isConfirmed) {
      try {
        await deleteDoc(doc(db, 'tasks', id));
        Swal.fire('Deleted!', 'Task has been removed.', 'success');
        fetchTasks();
      } catch (err) {
        console.error(err);
        Swal.fire('Error', 'Could not delete task.', 'error');
      }
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsEdit(false);
    setForm({ id: null, title: '', description: '', assignedTo: '', status: 'Pending', dueDate: '' });
  };

  // 🔍 Filter tasks by title
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageWrapper>
      <Header>
        <Title>Task Manager</Title>
        <SearchBar
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AddButton onClick={() => setModalOpen(true)}>+ Add Task</AddButton>
      </Header>

      {filteredTasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No tasks found.</p>
      ) : (
        filteredTasks.map(t => (
          <TaskCard key={t.id}>
            <TaskTitle>{t.title}</TaskTitle>
            <TaskInfo><strong>Description:</strong> {t.description}</TaskInfo>
            <TaskInfo>
              <strong>Assigned To:</strong> {users.find(u => u.id === t.assignedTo)?.name || 'Unknown'}
            </TaskInfo>
            <TaskInfo><strong>Due Date:</strong> {t.dueDate}</TaskInfo>
            <TaskInfo><strong>Created At:</strong> {t.createdAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>
            <TaskInfo><strong>Updated At:</strong> {t.updatedAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>
            <TaskInfo
              style={{
                backgroundColor: t.status === "Pending" ? "red" : "green",
                padding: "5px",
                borderRadius: "5px",
                color: "white"
              }}
            >
              <strong>Status:</strong> {t.status}
            </TaskInfo>
<p>Task Completion Photos:</p>
               {t.completionPhotos && t.completionPhotos.length > 0 && (
              <CompletionImagesContainer>
                
                {t.completionPhotos.map((url, index) => (
                  <ImageWrapper key={index}>
                    {/* <DeleteButton onClick={() => handleDeletePhoto(t.id, url)}>X</DeleteButton> */}
                    <CompletionImage src={url} alt="Completion" />
                    <FullscreenButton onClick={() => setFullscreenUrl(url)}>
                      View Fullscreen
                    </FullscreenButton>
                  </ImageWrapper>
                ))}
              </CompletionImagesContainer>
            )}

            <CardActions>
              <Button onClick={() => initiateEdit(t)}>Edit</Button>
              <Button danger onClick={() => deleteTask(t.id)}>Delete</Button>
            </CardActions>
          </TaskCard>
        ))
      )}

      {modalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2 style={{ color: "#0CC1E0" }}>{isEdit ? 'Edit Task' : 'Create Task'}</h2>

            <Field>
              <label>Title</label>
              <input name="title" value={form.title} onChange={handleChange} />
            </Field>

            <Field>
              <label>Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} />
            </Field>

            <Field>
              <label>Assigned To</label>
              <select name="assignedTo" value={form.assignedTo} onChange={handleChange}>
                <option value="">-- Select User --</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
            </Field>

            <Field>
              <label>Status</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </Field>

            <Field>
              <label>Due Date</label>
              <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
            </Field>

            <ModalActions>
              <Button onClick={submitTask}>{isEdit ? 'Update' : 'Create'}</Button>
              <Button danger onClick={closeModal}>Cancel</Button>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}

        {/* 🟢 Fullscreen Modal */}
      {fullscreenUrl && (
        <ModalOverlay2 onClick={() => setFullscreenUrl(null)}>
          <CloseModalButton onClick={() => setFullscreenUrl(null)}>×</CloseModalButton>
          <ModalImage src={fullscreenUrl} alt="Fullscreen" />
        </ModalOverlay2>
      )}
    </PageWrapper>
  );
};

export default TaskManager;
