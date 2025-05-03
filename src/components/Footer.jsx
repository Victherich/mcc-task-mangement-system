import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Images2/logo2.jpeg"; // Make sure the path to the logo is correct
import caccert from '../Images2/caccert.jpeg'
import CacCert from "./CacCert";

// Styled Components
const FooterContainer = styled.footer`
   background: #000045;
  color: white;
  padding: 40px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const FooterLogo = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const FooterTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const FooterText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #e0e0e0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;

  & a {
    font-size: 24px;
    color: white;
    transition: color 0.3s;

    &:hover {
      color: #f9a825;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;

  & a {
    color: white;
    font-size: 16px;
    transition: color 0.3s;
    &:hover {
      color: #f9a825;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #e0e0e0;
  margin-top: 20px;
`;

// Footer Component
const Footer = () => {
  const [isVisible, setIsVisible]=useState(false);

  return (
    <FooterContainer>
     <CacCert
     isVisible={isVisible}
     setIsVisible={setIsVisible}
     />
      {/* Logo */}
      <FooterLogo src={logo} alt="The Glory and Children Foundation Logo" /><br/>
      
      <FooterLogo style={{width:"50px", cursor:"pointer"}} src={caccert} alt='caccert' onClick={()=>setIsVisible(true)}/>
      <p style={{fontSize:"0.7rem", fontStyle:"italic"}}>RN8343245</p>
      {/* Title */}
      <FooterTitle>The Glory and Children Foundation</FooterTitle>

      {/* Description */}
      <FooterText>
        Our mission is to empower communities, transform lives, and create a
        brighter future for women and children through education, healthcare, and
        support.
      </FooterText>

      {/* Social Media Links */}
      <SocialLinks>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </SocialLinks>

      {/* Footer Links */}
      <FooterLinks>
      <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/gallery">Gallery</a>
        <a href="/donate">Donate</a>
        <a href="/blogs">Blogs</a>
        <a href="/contactus">Contact Us</a>
      </FooterLinks>

      {/* Copyright */}
      <Copyright>&copy; 2025 The Glory and Children Foundation. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
