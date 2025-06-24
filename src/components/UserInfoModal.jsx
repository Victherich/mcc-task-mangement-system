
// UserInfoModal.js
import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0; left: 0;
//   width: 100%; height: 100%;
//   background: rgba(0, 0, 0, 0.5);
  display: flex; justify-content: center; align-items: center;
//   z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
//   max-width: 400px;
//   box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  background: #119458;
  color: white;
  border: none;
  padding: 10px 22px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #0e7a45;
  }
`;

const UserInfoModal = ({ userData, setUserData, onProceed, clearSelectedService }) => {


  return (
    <ModalOverlay>
      <ModalContent>
        <h3 style={{color:"#119458"}}>Enter Your Details</h3>
        <Input
          placeholder="Full Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Input
          placeholder="Phone Number"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <Actions>
          <Button onClick={onProceed}>Proceed</Button>
          <Button onClick={()=>{window.history.back();clearSelectedService()}}
             style={{ background: "#ccc", color: "#000" }}
            >
            Cancel
          </Button>
        </Actions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserInfoModal;
