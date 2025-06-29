// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
//   color: #119458;
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
//     border-color: #119458;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   padding: 0.75rem;
//   background-color:#119458;
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

// const Message = styled.p`
//   margin-top: 1rem;
//   color: ${({ success }) => (success ? '#000050' : 'red')};
//   text-align: center;
//   font-size: 0.95rem;
// `;

// const AdminForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();
//   const [buttonText, setButtonText]=useState("Send Reset Link")

 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Show loading alert
//     Swal.fire({
//       title: 'Please wait...',
//       text: 'Sending password reset link...',
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });
  
//     try {
//       const res = await fetch('https://elitewealthglobal.com/api/admin_forgot_password.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });
  
//       const data = await res.json();
  
//       Swal.close();
  
//       if (data.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Success',
//           text: data.message || 'Reset link sent successfully Please check your email inbox or spam folder!',
//         });
//         setButtonText("Resend Reset Link");
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Failed',
//           text: data.message || 'Something went wrong. Please try again.',
//         });
//       }
//     } catch (error) {
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
//         <Title>Admin Forgot Password</Title>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             type="email"
//             placeholder="Enter your email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Button type="submit">{buttonText}</Button>

//         </Form>
//         <p onClick={()=>navigate("/adminlogin")} style={{color:"#000050", cursor:"pointer"}}>Back to Login</p>
//         {message && <Message success={success}>{message}</Message>}
//       </FormWrapper>
//     </Container>
//   );
// };

// export default AdminForgotPassword;



// pages/AdminForgotPassword.js
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

// Reuse the light theme styles from your login page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #F0F2F5;
`;

const FormWrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #E0E6ED;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
  color: #119458;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #119458;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: #F8FAFC;
  color: #333;
  border: 2px solid #CBD5E1;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    border-color: #4A90E2;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  background: #119458;
  color: #fff;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: #3A7DCF;
  }
`;

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire("Missing Email", "Please enter your email address.", "warning");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire("Reset Email Sent", "Check your email inbox to reset your password and then come back and login.", "success");
      navigate("/adminlogin");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Admin Forgot Password</Title>
        <form onSubmit={handleReset}>
          <Label htmlFor="email">Enter your admin email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
          />
          <Button type="submit">Send Reset Email</Button>
          <Button type="button" onClick={() => navigate("/adminlogin")}>Back to Login</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default AdminForgotPassword;
