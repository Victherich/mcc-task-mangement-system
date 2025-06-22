
// BookingModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";

// Styled Components (reuse from Services)
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
`;

const ModalTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 24px;
  color: #0c5e36;
`;

const PackageOption = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid ${(props) => (props.selected ? "#119458" : "#ccc")};
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#119458" : "")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  color: ${(props) => (props.selected ? "white" : "#222")};
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
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

const BookingModal = ({ open, service, onClose, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [selectedPackage, setSelectedPackage] = useState("");
  const [processing, setProcessing] = useState(false);

  const extractAmount = (label) => {
    const match = label.match(/AED\s?(\d+)/i);
    return match ? parseInt(match[1], 10) * 100 : 5000; // default 50 AED
  };

  const handlePayment = async () => {
    if (!stripe || !elements || !selectedPackage) return;

    setProcessing(true);
    const amount = extractAmount(selectedPackage);

    try {
      const res = await fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await res.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      setProcessing(false);

      if (error) {
        alert(error.message);
      } else if (paymentIntent.status === "succeeded") {
        alert("Payment successful!");
        onSuccess(service.title, selectedPackage);
        onClose();
      }
    } catch (err) {
      alert("Payment failed. Please try again.");
      setProcessing(false);
    }
  };

  return (
    <ModalOverlay open={open}>
      <ModalContent>
        <ModalTitle>Select a Package for {service?.title}</ModalTitle>
        {service?.packages.map((pkg, i) => (
          <PackageOption
            key={i}
            selected={selectedPackage === pkg}
            onClick={() => setSelectedPackage(pkg)}
          >
            {pkg}
          </PackageOption>
        ))}

        {selectedPackage && (
          <>
            <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
            <ModalActions>
              <Button onClick={handlePayment} disabled={processing}>
                {processing ? "Processing..." : "Pay Now"}
              </Button>
              <Button onClick={onClose} style={{ background: "#ccc", color: "#000" }}>
                Cancel
              </Button>
            </ModalActions>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

BookingModal.propTypes = {
  open: PropTypes.bool.isRequired,
  service: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default BookingModal;
