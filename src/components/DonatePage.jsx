import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import PaystackPop from "@paystack/inline-js";
import bg from '../Images/money.png'

// Styled Components
const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  background: #f9f9f9;
`;

const HeroSection = styled.div`
  background: url(${bg}) center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 150px 20px;
  background-position:bottom;

@media(max-width:768px){
    padding-top:200px;

`;

const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-top: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;

const FormSection = styled.div`
  background: #fff;
  padding: 60px 20px;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: auto;
  background: #f4f4f4;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: rgba(0,0,255,0.5);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const DonateButton = styled.button`
  background: rgba(0,0,255,0.5);
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background:rgba(0,0,255,0.7);
  }
`;

// Donate Page Component
const DonatePage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", amount: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const payWithPaystack = () => {
    const { name, email, amount } = formData;

    if (!name || !email || !amount) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Details",
        text: "Please fill in all fields before proceeding.",
        confirmButtonColor: "#e67e22",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Payment",
      text: `You are about to donate ₦${Number(amount).toLocaleString()}. Do you want to proceed?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "No, cancel",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const paystack = new PaystackPop();
        paystack.newTransaction({
          key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4", // Replace with your Paystack Public Key
          amount: amount * 100, // Convert NGN to kobo
          email: email,
          onSuccess: (transaction) => {
            Swal.fire({
              icon: "success",
              title: "🎉 Thanks for your Donation!",
              text: `Confirmation is sent to your provided email address. Transaction ID: ${transaction.reference}`,
              confirmButtonColor: "#e67e22",
            });
            setFormData({ name: "", email: "", amount: "" });
          },
          onCancel: () => {
            Swal.fire({
              icon: "error",
              title: "Transaction Canceled",
              text: "You canceled the donation process.",
              confirmButtonColor: "#e67e22",
            });
          },
        });
      }
    });
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>Support Our Vision</HeroTitle>
        <HeroSubtitle>Your donation helps us make a difference.</HeroSubtitle>
      </HeroSection>

      {/* Donation Form Section */}
      <FormSection>
        <FormContainer>
          <FormTitle>Make a Donation</FormTitle>
          <form>
            <FormInput type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <FormInput type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <FormInput type="number" name="amount" placeholder="Enter Amount" value={formData.amount} onChange={handleChange} required />

            <DonateButton type="button" onClick={payWithPaystack}>
              Donate Now
            </DonateButton>
          </form>
        </FormContainer>
      </FormSection>
    </PageWrapper>
  );
};

export default DonatePage;
