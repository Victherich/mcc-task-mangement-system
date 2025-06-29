// // StudentResetPassword.jsx
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import Swal from 'sweetalert2';

// const Container = styled.div`
//   min-height: 100vh;
//   background: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
// `;

// const FormWrapper = styled.div`
//   padding: 2.5rem;
//   border-radius: 16px;
//   width: 100%;
//   max-width: 400px;
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   margin-bottom: 1.5rem;
//   color: #000050;
//   text-align: center;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   font-size: 1rem;
//   &:focus {
//     border-color: #000050;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   padding: 0.75rem;
//   background-color: #000050;
//   color: white;
//   font-size: 1rem;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     background-color: gray;
//   }
// `;

// const AdminResetPassword = () => {
//   const { token } = useParams();
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Passwords do not match',
//       });
//       return;
//     }

//     Swal.fire({
//       title: 'Please wait...',
//       text: 'Resetting your password...',
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       const res = await fetch('https://elitewealthglobal.com/api/admin_reset_password.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ token, password }),
//       });

//       const data = await res.json();
//       Swal.close();

//       if (data.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Success',
//           text: data.message || 'Password reset successfully!',
//         }).then(() => {
//           navigate('/adminlogin');
//         });
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Failed',
//           text: data.message || 'Failed to reset password.',
//         });
//       }
//     } catch (err) {
//       Swal.close();
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Something went wrong. Please try again.',
//       });
//     }
//   };


  
//   return (
//     <Container>
//       <FormWrapper>
//         <Title>Reset Your Password</Title>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             type="password"
//             placeholder="New password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Input
//             type="password"
//             placeholder="Confirm new password"
//             required
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <Button type="submit">Reset Password</Button>
//         </Form>
//         <p onClick={() => navigate("/adminlogin")} style={{ color: "#000050", cursor: "pointer" }}>Back to Login</p>
//       </FormWrapper>
//     </Container>
//   );
// };

// export default AdminResetPassword;



// pages/AdminResetSuccess.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background-color: #F0F2F5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageCard = styled.div`
  background: #FFFFFF;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 500px;
`;

const Title = styled.h2`
  color: #119458;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #333;
  font-size: 1rem;
`;

const Button = styled.button`
  background: #119458;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #3A7DCF;
  }
`;

const AdminResetPassword = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MessageCard>
        <Title>Check Your Email 📧</Title>
        <Text>
          We’ve sent a password reset link to your email. Follow the instructions to reset your password.
        </Text>
        <Button onClick={() => navigate("/adminlogin")}>Back to Login</Button>
      </MessageCard>
    </Container>
  );
};

export default AdminResetPassword;
