import React from "react";
import styled, {keyframes} from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from '../Images/logo.png'
import { useNavigate } from "react-router-dom";


const Div = styled.div`

`
const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components
const FooterContainer = styled.footer`
  background: #222;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);

  img{
    border-radius:50%;
    width:100px;
    height:100px;
    animation: ${rotateAnimation} 10s linear infinite; /* 2s duration, infinite loop */
  }

  @media(max-width:768px){
    flex-direction:column;
  }
`;

const Section = styled.div`
  flex: 1;
//   min-width: 250px;
  margin: 10px;
  align-items:center;
  justify-content:center;

   @media(max-width:768px){
    margin-bottom:30px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: white;
//   text-decoration:underline;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
//   text-align:left;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 8px 0;
  font-size: 15px;
  transition: 0.3s;
//   text-align:left;
  
  &:hover {
    color: #f8b400;
    cursor: pointer;
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  color: white;
  font-size: 20px;
  transition: 0.3s;
  
  &:hover {
    color: #f8b400;
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 13px;
  margin-top: 20px;
  border-top: 1px solid #444;
  padding-top: 10px;
`;

// Footer Component
const Footer = () => {
    const navigate = useNavigate();
  return (
  <FooterContainer style={{padding:"0px",paddingBottom:"40px", flexDirection:"column", justifyContent:"center", alignItems:"center"}}> 
         <FooterContainer>
                {/* About Section */}
      <Section>
        <Title>The Foundation</Title>
        <Text>
          Eze Mbionwu Foundation is dedicated to community development and stability, striving to uplift lives through various projects and initiatives.
        </Text>
      </Section>

      {/* Quick Links Section */}
      <Section>
        <Title>Quick Links</Title>
        <LinksList>
          <LinkItem onClick={()=>{navigate('/');window.scroll(0,0)}}>🏠 Home</LinkItem>
          <LinkItem onClick={()=>navigate('/aboutus')}>ℹ️ About Us</LinkItem>
          <LinkItem onClick={()=>navigate('/authenticity')}>🛡️ Our Recognition</LinkItem>
          <LinkItem onClick={()=>navigate('/gallery')}>📚 Gallery</LinkItem>
          <LinkItem onClick={()=>navigate('/donate')}>💖 Donate</LinkItem>
          <LinkItem onClick={()=>navigate('/blogs')}>📚 Blogs</LinkItem>
          <LinkItem onClick={()=>navigate('/contactus')}>📞 Contact Us</LinkItem>
        </LinksList>
      </Section>

      {/* Contact & Social Media */}
      <Section>
        <Title>Contact Us</Title>
        <Text>📍 Eze’s Place Umoubom Ideoto-south LGA, Imo state</Text>
        <Text>📍 Plot 10, Oliver Tambo Street, Asokoro, FCT Abuja.</Text>
        <Text>📧 info@ezembionwufoundation.org</Text>
        <Text>📞 +234 803 500 5839</Text>
        {/* <Text>📞 +234 704 083 455</Text> */}
        <SocialIcons>
          <SocialIcon href="#"><FaFacebook /></SocialIcon>
          <SocialIcon href="#"><FaTwitter /></SocialIcon>
          <SocialIcon href="#"><FaInstagram /></SocialIcon>
          <SocialIcon href="#"><FaLinkedin /></SocialIcon>
          <SocialIcon href="#"><FaEnvelope /></SocialIcon>
        </SocialIcons>
      </Section>
    
  

      {/* Copyright */}
     
    </FooterContainer> 
    <img src={logo} alt="logo"/>
    <Copyright>
        
        © {new Date().getFullYear()} Eze Mbionwu Foundation | All Rights Reserved.
      </Copyright>
      <Copyright>
        
      Motto: Let’s do something positive
      </Copyright>

  </FooterContainer>
  );
};

export default Footer;
