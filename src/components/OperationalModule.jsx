import React from "react";
import styled, { keyframes } from "styled-components";
// import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaHandsHelping, FaClipboardList, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import op from "../Images/76520.jpg"


// Animation for the heading underline
const underlineAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

// Styled Components
const Section = styled.section`
//   background: #f4f4f4;
  padding: 80px 20px;
  text-align: center;
  background-image:url(${op});
  background-size:cover;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background: linear-gradient(45deg, #3498db, #e74c3c);
    animation: ${underlineAnimation} 1.5s ease-in-out;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const Card = styled.div`
  background:rgba(255,255,255,0.8);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 50px;
//   color: #3498db;
color:rgba(0,0,255,0.5);
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: left;
`;

// Main Component
const OperationalModule = () => {
  return (
    <Section>
      <Title>OPERATIONAL MODULE</Title>
      <GridContainer>
        {/* Social Mapping */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaUsers /></IconWrapper>
          <CardTitle>Social Mapping</CardTitle>
          <Description>
            Social mapping of the communities within the focus area to addressing the issue of the physically challenged and the less privilege with a view to fully identifying their socio-economy needs and ways to ameliorate them.
          </Description>
        </Card>

        {/* Data Compilation */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaClipboardList /></IconWrapper>
          <CardTitle>Compilation of Data</CardTitle>
          <Description>
            Compilation of data, amendments, harnessing, sharing and utilize to the letter for further action.
          </Description>
        </Card>

        {/* Spreading Love, Peace & Tranquility */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaHandsHelping /></IconWrapper>
          <CardTitle>Spreading Love & Peace</CardTitle>
          <Description>
            To spread the message of love, peace, and tranquillity among communities and re-orientation of the physically challenged and less privileged for socio-economic participation in the society and community.
          </Description>
        </Card>

        {/* Result Analysis */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaChartLine /></IconWrapper>
          <CardTitle>Result Analysis</CardTitle>
          <Description>
            Result analysis and planning framework to enhance corporate performance.
          </Description>
        </Card>

        {/* Best Practices */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaLightbulb /></IconWrapper>
          <CardTitle>Maximizing Best Practices</CardTitle>
          <Description>
            To maximize the best practice in areas of investment, managerial skills and research methodology with established protocols.
          </Description>
        </Card>

        {/* Skill Acquisition */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaGraduationCap /></IconWrapper>
          <CardTitle>Training & Skill Acquisition</CardTitle>
          <Description>
            Training the trainee, skill acquisition, information technology, craft support, free health care delivery for the aged and less privilege etc, hence the foundation intends to build an ultra modern skill acquisition centre in Imo state and beyond.
          </Description>
        </Card>
      </GridContainer>
    </Section>
  );
};

export default OperationalModule;
