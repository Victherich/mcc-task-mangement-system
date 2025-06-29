
// pages/UserForgotPassword.js
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// styling (reuse from login)
const Container = styled.div`
  min-height: 100vh;
  background: #F0F2F5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h2`
  color: #119458;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #119458;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 2px solid #CBD5E1;
  border-radius: 8px;
`;

const Button = styled.button`
  background: #119458;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background: #3A7DCF;
  }
`;

const UserForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        Swal.fire("Not Found", "No account found with that email.", "error");
        return;
      }

      const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
      const userDoc = snapshot.docs[0];
      const userRef = doc(db, "users", userDoc.id);

      await updateDoc(userRef, {
        resetCode,
        resetCodeCreatedAt: new Date().toISOString(),
      });

      Swal.fire("Code Sent!", `Use code: ${resetCode} to reset your password.`, "info");
      navigate("/userresetpassword");

    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>User Forgot Password</Title>
        <form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Generate Reset Code</Button>
          <Button type="button" onClick={() => navigate("/userlogin")}>
            Back to Login
          </Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default UserForgotPassword;
