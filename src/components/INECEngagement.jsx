import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaEye, FaFilePdf, FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

// Sample Images & PDF
import inecImage1 from "../Images/election.jpeg";
import inecImage2 from "../Images/launch.jpeg";
import engagementLetter from "../Images/Document 14.pdf";
import engagementLetter2 from "../Images/Document 15.pdf";
import bg from "../Images/inecherobg.png"
import ngnflag from "../Images/ngnflag.png"

// Floating Animation
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(20px); }
  100% { transform: translateY(0px); }  
`;

// Styled Components
const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  background-image:url(${ngnflag});
  background-size:cover;
  position:relative;

  &:before{
    background-color:rgba(255,255,255,0.5);
    width:100%;
    height:100%;
    position:absolute;
    content:"";
    top:0;
    left:0;

      }
`;


const HeroSection = styled.div`
  background: url(${bg}) center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 150px 20px;
  position:relative;
//   background-position:bottom;

@media(max-width:768px){
    padding-top:200px;

`;

const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);

  @media(max-width:428px){
    font-size:2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-top: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
   @media(max-width:428px){
    font-size:1rem;
  }
`;

// Floating Artistic Elements
const FloatingObject = styled.div`
  position: absolute;
  width: ${(props) => props.size || "150px"};
  height: ${(props) => props.size || "150px"};
  background: rgba(0, 0, 255, 0.2);
  border-radius: 50%;
  top: ${(props) => props.top || "10%"};
  left: ${(props) => props.left || "10%"};
  animation: ${floatAnimation} 6s infinite ease-in-out;
  z-index: -1;
`;

// Image Gallery
const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  position:relative;
`;

// const ImageCard = styled.div`
//   width: 300px;
//   height:450px;
//   overflow-y:scroll;
//   background: rgba(255,255,255,0.5);
//   padding: 15px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   text-align: center;
//   transition: 0.3s;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;


const ImageCard = styled.div`
  width: 300px;
  height: 450px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.5);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 255, 0.1); /* Light blue track */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 255, 0.5); /* Blue scrollbar */
    border-radius: 10px;
    border: 2px solid white; /* Gives a nice effect */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 255, 0.7); /* Darker on hover */
  }

  /* Firefox Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 255, 0.5) rgba(0, 0, 255, 0.1);
`;


const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Caption = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  color: rgba(0, 0, 255, 0.5);
`;

// PDF Preview Section
const PDFSection = styled.div`
  background: rgba(255,255,255,0.5);
  padding: 30px;
  text-align: center;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position:relative;
`;

const PDFTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: rgba(0, 0, 255, 0.5);
`;

const PDFPreview = styled.iframe`
  width: 100%;
  max-width: 500px;
  height: 200px;
  border: 5px solid rgba(0,0,255,0.5);
  margin-top: 20px;
  border-radius: 10px;
`;

const ViewButton = styled.button`
  background: rgba(0, 0, 255, 0.5);
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: rgba(0, 0, 255, 0.7);
  }
`;

// Component
const INECEngagement = () => {
  const [pdfVisible, setPdfVisible] = useState(true);

  const handleViewPDF = () => {
    Swal.fire({
      title: "Redirecting to full document...",
    //   icon: "info",
      showConfirmButton: false,
      timer: 2000,
    });
    Swal.showLoading();
    setTimeout(() => {
      window.open(engagementLetter, "_blank");
    }, 2000);
  };

  const handleViewPDF2 = () => {
    Swal.fire({
      title: "Redirecting to full document...",
    //   icon: "info",
      showConfirmButton: false,
      timer: 2000,
    });
    Swal.showLoading();
    setTimeout(() => {
      window.open(engagementLetter2, "_blank");
    }, 2000);
  };

  return (
    <PageWrapper>
      {/* Floating Objects */}
      <FloatingObject top="10%" left="5%" size="200px" />
      <FloatingObject top="40%" left="80%" size="250px" />
      <FloatingObject top="70%" left="20%" size="180px" />

      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>INEC Engagement</HeroTitle>
        <HeroSubtitle>
          Our NGO has been an integral part of election observation, ensuring transparency, fairness, and democratic integrity.
        </HeroSubtitle>
      </HeroSection>

      {/* Images Section */}
      <ImageGallery>
        <ImageCard>
          <Image src={inecImage1} alt="INEC Observation 1" />
          <Caption>Our team actively observing the election process</Caption>
        </ImageCard>

        <ImageCard>
          <Image src={inecImage2} alt="INEC Observation 2" />
          <Caption>Official launching banner</Caption>
        </ImageCard>
      </ImageGallery>

      {/* PDF Preview Section */}
      <PDFSection>
        <PDFTitle>
          <FaFilePdf /> INEC Engagement Letter Preview
        </PDFTitle>

        {/* Toggle PDF Preview */}
        {pdfVisible && <PDFPreview src={engagementLetter} title="INEC Engagement Letter" />}

        {/* View Full Document Button */}
        <ViewButton onClick={handleViewPDF}>
          <FaEye /> View Complete Document
        </ViewButton>
      </PDFSection>


       {/* PDF Preview Section */}
       <PDFSection>
        <PDFTitle>
          <FaFilePdf /> Accreditation Form Preview
        </PDFTitle>

        {/* Toggle PDF Preview */}
        {pdfVisible && <PDFPreview src={engagementLetter2} title="Accreditation Form" />}

        {/* View Full Document Button */}
        <ViewButton onClick={handleViewPDF2}>
          <FaEye /> View Complete Document
        </ViewButton>
      </PDFSection>
    </PageWrapper>
  );
};

export default INECEngagement;
