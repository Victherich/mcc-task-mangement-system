





// export default TaskManager;
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
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  color: #119458;
`;

const AddButton = styled.button`
  background: #119458;
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

const TaskTitle = styled.h3`
  margin: 0;
  color: #333;
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
  background: ${({ danger }) => (danger ? '#d9534f' : '#119458')};
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
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:999;
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

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);


const [users, setUsers] = useState([]);

useEffect(() => {
  
  fetchUsers();
}, []);

const fetchUsers = async () => {
  const snapshot = await getDocs(collection(db, 'users'));
  const userList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  setUsers(userList);
};




  const [form, setForm] = useState({
    id: null,
    title: '',
    description: '',
    assignedTo: '',
    status: 'Pending',
    dueDate: ''
  });

  useEffect(() => {
fetchTasks();

    const id = setInterval(()=>{
        fetchTasks();
    },20000)

    return()=>clearInterval(id)
  }, []);

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

  return (
    <PageWrapper>
      <Header>
        <Title>Task Manager</Title>
        <AddButton onClick={() => setModalOpen(true)}>+ Add Task</AddButton>
      </Header>

      {tasks.map(t => (
        <TaskCard key={t.id}>
          <TaskTitle>{t.title}</TaskTitle>
          <TaskInfo><strong>Description:</strong> {t.description}</TaskInfo>
         <TaskInfo>
  <strong>Assigned To:</strong> {
    users.find(u => u.id === t.assignedTo)?.name || 'Unknown'
  }
</TaskInfo>

           <TaskInfo><strong>Due Date:</strong> {t.dueDate}</TaskInfo>
          <TaskInfo><strong>Created At:</strong> {t.createdAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>
          <TaskInfo><strong>Updated At:</strong> {t.updatedAt?.toDate?.().toLocaleString() || '–'}</TaskInfo>
          <TaskInfo style={{backgroundColor:t.status==="Pending"?"red":"green", padding:"5px", borderRadius:"5px", color:"white"}}><strong>Status:</strong> {t.status}</TaskInfo>
         
          <CardActions>
            <Button onClick={() => initiateEdit(t)}>Edit</Button>
            <Button  onClick={() => deleteTask(t.id)}>Delete</Button>
          </CardActions>
        </TaskCard>
      ))}

      {modalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2 style={{color:"#119458"}}>{isEdit ? 'Edit Task' : 'Create Task'}</h2>
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
    </PageWrapper>
  );
};

export default TaskManager;




