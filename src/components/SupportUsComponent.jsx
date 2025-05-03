import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';




const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;



const SectionContainer = styled.div`
  max-width: 900px;
  margin: auto;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: rgba(0,0,255,0.5);
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;



const Button = styled.button`
  background: white;
  color: rgba(0,0,255,0.5);
  padding: 12px 20px;
  font-size: 16px;
  font-weight:bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
  margin:10px;

  &:hover {
    // background: #;
  }
`;




const SupportUsComponent = () => {
    const navigate = useNavigate();

  return (
    <Section style={{ background: "rgba(0,0,255,0.5)", color: "white" }}>
    <SectionContainer>
      <SectionTitle style={{color:"white"}}>Support and Join us</SectionTitle>
      <SectionText style={{color:"white"}}>Join the movement—your support empowers us to reach and transform even more lives!</SectionText>
      <Button onClick={()=>navigate('/donate')}>Donate</Button>
      <Button onClick={()=>navigate('/contactus')}>Get Involved</Button>
    </SectionContainer>
  </Section>
  )
}

export default SupportUsComponent
