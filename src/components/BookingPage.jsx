import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import UserInfoModal from "./UserInfoModal";
import { db } from "../firebaseConfig"; // adjust path to your Firebase config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";



// === Styled Components ===
const PageContainer = styled.div`
  min-height: 100vh;
  // background-color: #f2f2f2;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;

const ContentBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  // box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  font-size: 28px;
  color: #0c5e36;
  margin-bottom: 20px;
`;

const PackageOption = styled.div`
  padding: 12px;
  margin-bottom: 12px;
  border: 2px solid ${(props) => (props.selected ? "#119458" : "#ccc")};
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#119458" : "#fff")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  color: ${(props) => (props.selected ? "white" : "#222")};

  &:hover{
  background-color:#119458;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
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

const Select = styled.select`
  padding:10px;
  width:100%;
  outline:none;
`

// === Component ===
const BookingPage = () => {
  const [selectedPackage, setSelectedPackage] = useState({});
  const [showPayPal, setShowPayPal] = useState(false);
  const paypalRef = useRef(null);
const [service, setService]=useState(null);
const navigate = useNavigate();

const [showModal, setShowModal] = useState(false);
const [userData, setUserData] = useState({ name: "", email: "", phone: "" });

useEffect(() => {
  if (!service) {
    const savedService = localStorage.getItem("selectedService");
    if (savedService) {
      setService(JSON.parse(savedService));
    }
  }
}, []);



const extractAmount = (pkg) => {
  const AED_TO_USD = 0.27;
  const aedPrice = pkg?.price ? parseFloat(pkg.price) : 50;
  const usdPrice = aedPrice * AED_TO_USD;
  return parseFloat(usdPrice.toFixed(2)); // ensure it's a number, not string
};



console.log(selectedPackage)



  const handlePayNow = () => {
    setShowPayPal(true);
  };

  useEffect(() => {
    if (showPayPal && window.paypal && selectedPackage) {
      paypalRef.current.innerHTML = "";

      window.paypal.Buttons({
        style: {
          layout: "vertical",
          color: "gold",
          shape: "pill",
          label: "paypal",
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: extractAmount(selectedPackage).toString(),
                },
              },
            ],
          });
        },
      onApprove: async (data, actions) => {
  const details = await actions.order.capture();

  const orderDetails = {
    user: userData,
    serviceTitle: service?.title,
    selectedPackage,
    sellerEmail:"matthewcarwashandcleaning20@gmail.com",
    priceAED: selectedPackage.price,
    priceUSD: extractAmount(selectedPackage),
    paymentDetails: details,
    date: new Date().toISOString(),
  };

  await saveOrderToDatabase(orderDetails);
  await sendOrderEmails(orderDetails); // This function stays same as earlier

  Swal.fire("Success", "Payment successful and order saved!", "success");
navigate('/')
  clearSelectedService();
  setShowPayPal(false);
}
,
        onError: (err) => {
          console.error("PayPal error:", err);
          alert("Payment failed. Try again.");
        },
      }).render(paypalRef.current);
    }
  }, [showPayPal, selectedPackage]);


  const clearSelectedService = () => {
  localStorage.removeItem("selectedService");
  setService(null); // optional: reset local state too
};



const saveOrderToDatabase = async (order) => {

  
  try {
    await addDoc(collection(db, "orders"), {
      ...order,
      createdAt: serverTimestamp(),
    });

    console.log("Order saved to Firestore");
  } catch (error) {
    console.error("Error saving order:", error);
    Swal.fire("Error", "Failed to save order to database.", "error");
  }
};


const sendOrderEmails = async (order) => {

  console.log(order)
  try {
    const response = await fetch("https://backend-mailer-1.vercel.app/api/matthew_car_wash_order_email_sender", {
    // const response = await fetch("http://localhost:3000/api/matthew_car_wash_order_email_sender", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error("Failed to send emails.");
    }

    console.log("Emails sent");
  } catch (err) {
    console.error("Email error:", err);
    Swal.fire({ icon: "error", title: "Failed to send confirmation emails" });
  }
};


  return (
    <PageContainer>
      <ContentBox>
        <Title>Select a Package for {service?.title}</Title>

        {/* {service?.packages.map((pkg, i) => (
          <PackageOption
            key={i}
            selected={selectedPackage?.name === pkg.name}
            onClick={() => {
              setSelectedPackage(pkg);
              setShowPayPal(false);
            }}
          >
            {pkg.name} - AED {pkg.price}
          </PackageOption>
        ))} */}
<Select onChange={(e) => setSelectedPackage(service.packages[e.target.value])}>
  <option>-- Select a Package --</option>
  {service?.packages.map((pkg, i) => (
    <option key={i} value={i}>
      {pkg.name} - AED {pkg.price}
    </option>
  ))}
</Select>


    <UserInfoModal

  userData={userData}
  setUserData={setUserData}
  onCancel={() => setShowModal(false)}
  onProceed={handlePayNow}
  clearSelectedService={clearSelectedService}
/>
        

{showPayPal && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        width: "90%",
        maxWidth: "500px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
        position: "relative",
      }}
    >
      <h3 style={{ marginBottom: "20px", textAlign:"center"}}>Complete Your Payment</h3>
      <h4 style={{color:"green", marginBottom:"10px", textAlign:"center"}}>USD { extractAmount(selectedPackage)}</h4>
      <div ref={paypalRef} style={{ marginBottom: "20px" }}></div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button
          onClick={() => setShowPayPal(false)}
          style={{
            backgroundColor: "#ccc",
            color: "#000",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      </ContentBox>
  

    </PageContainer>
  );
};

BookingPage.propTypes = {
  service: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default BookingPage;
