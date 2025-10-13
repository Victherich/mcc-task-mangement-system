import React from "react";
import { QRCodeSVG } from "qrcode.react";
import styled from "styled-components";

const QRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: fit-content;
  margin: 50px auto;
`;

const ScanText = styled.p`
  margin-top: 16px;
  color: #0c5e36;
  font-weight: 500;
  text-align: center;
  font-size: 1rem;
`;

const TexasTrashCanQRCode = () => {
  const qrLink = "https://texastrashcanvalet.com/sign-up-8981";

  return (
    <QRWrapper>
      <QRCodeSVG value={qrLink} size={200} />
      <ScanText>Scan to sign up in seconds with 1 week free trial!</ScanText>
    </QRWrapper>
  );
};

export default TexasTrashCanQRCode;
