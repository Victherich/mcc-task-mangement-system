import React from "react";
import styled, { keyframes } from "styled-components";
import logo from '../Images/logo.png'

const gradientAnimation = keyframes`
  0% { color:red; }
  25% { color: blue; }
  50% { color: green; }
  75% { color: blue; }
  100% { color:purple; }
`;


const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// const gradientAnimation = keyframes`
//   0% { color: #ff6b6b; }   /* Soft Red */
//   25% { color: #f6b93b; }   /* Golden Yellow */
//   50% { color: #1dd1a1; }   /* Teal Green */
//   75% { color: #54a0ff; }   /* Sky Blue */
//   100% { color: #5f27cd; }  /* Royal Purple */
// `;


const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  z-index: 1000;


@media(max-width:768px){
    flex-direction:column;
    position:relative;
}


`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  animation: ${rotateAnimation} 10s linear infinite; /* 2s duration, infinite loop */

@media(max-width:768px){
    width:40px;
}
`;

const Logo2 = styled.img`
  width: 60px;
  height: auto;
  animation: ${rotateAnimation} 10s linear infinite; /* 2s duration, infinite loop */

  @media(max-width:768px){
    display:none;
  }
 
  
`;

const TitleContainer = styled.div`
  text-align: center;
  flex-grow: 1;
`;

const Title = styled.h1`
//   font-size: 22px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1rem;  /* Increases space between letters */
  word-spacing: 6px;    /* Increases space between words */
  animation: ${gradientAnimation} 4s infinite alternate;

@media(max-width:768px){
      letter-spacing: 0.1rem;  /* Increases space between letters */
  word-spacing: 6px;    /* Increases space between words */
  font-weight:bold;
  font-size:20px;
}

`;


const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  animation: ${gradientAnimation} 4s infinite alternate-reverse;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Logo src={logo} alt="NGO Logo" />
      <TitleContainer>
        <Title>👑 EZE MBIONWU FOUNDATION 👑</Title>
        <Subtitle>(FOR COMMUNITY DEVELOPMENT AND STABILITY)</Subtitle>
      </TitleContainer>
      <Logo2 src={logo} alt="NGO Logo" />
    </HeaderWrap>
  );
};

export default Header;
