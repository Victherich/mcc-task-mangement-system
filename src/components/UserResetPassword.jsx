
// pages/UserResetPassword.js
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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

const UserResetPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email), where("resetCode", "==", code));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        Swal.fire("Invalid Code", "Email or code is incorrect.", "error");
        return;
      }

      const userDoc = snapshot.docs[0];
      const userRef = doc(db, "users", userDoc.id);

      await updateDoc(userRef, {
        password: newPassword,
        resetCode: "", // Clear code
        resetCodeCreatedAt: "", // Optional cleanup
      });

      Swal.fire("Success ✅", "Your password has been reset.", "success");
      navigate("/userlogin");

    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Reset Password</Title>
        <form onSubmit={handleReset}>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label>Reset Code</Label>
          <Input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <Label>New Password</Label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <Button type="submit">Update Password</Button>
          <Button type="button" onClick={() => navigate("/userlogin")}>
            Back to Login
          </Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default UserResetPassword;
