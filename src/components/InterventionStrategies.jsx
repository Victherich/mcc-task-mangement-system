import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHandshake, FaUniversity, FaGlobe, FaUsers, FaBusinessTime, FaHeart } from "react-icons/fa";

// Styled Components
const Section = styled.section`
  background: linear-gradient(135deg, #f9f9f9, #e3e3e3);
  padding: 80px 20px;
  text-align: center;
  clip-path: polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%);


  @media(max-width:768px){
    padding-top:200px;
    padding-bottom:200px;
  }
   
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
  z-index:999;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
 
`;

const Card = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;
  transition: transform 0.3s ease-in-out;
  z-index:999;

  &:hover {
    transform: translateY(-5px);
  }

  &:before {
    content: "";
    width: 100px;
    height: 100px;
    background: rgba(52, 152, 219, 0.2);
    position: absolute;
    top: -30px;
    left: -30px;
    border-radius: 50%;
  }
`;

const IconWrapper = styled.div`
  font-size: 50px;
  // color: #3498db;
  color:rgba(0,0,255,0.5);
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:before {
    content: "✔️";
    margin-right: 10px;
    color: #27ae60;
  }
`;

// Main Component
const InterventionStrategies = () => {
  return (
    <Section>
      <Title>INTERVENTION STRATEGIES</Title>
      <Description>
        We focus on various strategies including advocacy, sponsorship, financing, and partnership to drive impactful community development.
      </Description>
      <CardContainer>
        {/* Advocacy */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaHandsHelping /></IconWrapper>
          <CardTitle>Advocacy</CardTitle>
          <List>
            <ListItem>Encouraging communal self help projects.</ListItem>
            <ListItem>Harnessing and Harmonizing Communities Integration across Borders.</ListItem>
            <ListItem>Public Recognition of Special Rights.</ListItem>
            <ListItem>Bring to bear the discrimination in labour and Public Appointment opportunities.</ListItem>
            <ListItem>Cementing the bond among Indigent Communities</ListItem>
          </List>
        </Card>

        {/* Sponsorship Drive */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaUniversity /></IconWrapper>
          <CardTitle>Sponsorship Drive</CardTitle>
          <List>
            <ListItem>Free capacity building seminars & workshops.</ListItem>
            <ListItem>Provision of scholarship and grant for academic excellence.</ListItem>
            <ListItem>Provision of free medical assistance to the aged and less priviledge.</ListItem>
            <ListItem>Partnering with other NGO’s both international/Local for exchange of ideas and programme that will guarantee efficiency and effectiveness.</ListItem>
          </List>
        </Card>

        {/* Peripheral Financing */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaBusinessTime /></IconWrapper>
          <CardTitle>Peripheral Financing</CardTitle>
          <List>
            <ListItem>Functional entrepreneurial efforts.</ListItem>
            <ListItem>Efficient Contractual Jobs.</ListItem>
            <ListItem>Efficient cottage industrial projects.</ListItem>
            <ListItem>Efficient auxiliary business plan.</ListItem>
            <ListItem>Efficient Information Technology online schemes.</ListItem>
          </List>
        </Card>

        {/* Support Networks */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaUsers /></IconWrapper>
          <CardTitle>Support Networks</CardTitle>
          <List>
            <ListItem>Local social cells.</ListItem>
            <ListItem>Specialized credit & thrift societies</ListItem>
            <ListItem>Professional associations</ListItem>
            <ListItem>Sponsored para sport Tournament </ListItem>
            <ListItem>Sustainable Specialized Media Programmes</ListItem>
            <ListItem>Cooperative Societies </ListItem>
          </List>
        </Card>

        {/* Partnership Drive */}
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaHandshake /></IconWrapper>
          <CardTitle>Partnership Drive</CardTitle>
          <List>
  <ListItem>Philanthropic Gestures</ListItem>
  <ListItem>International Organizations</ListItem>
  <ListItem>Governmental Institutions</ListItem>
  <ListItem>Religious Institutions</ListItem>
  <ListItem>International Development Agencies</ListItem>
  <ListItem>Social Institutions</ListItem>
  <ListItem>Opinion Leaders</ListItem>
  <ListItem>Traditional Institutions</ListItem>
  <ListItem>Social Icons</ListItem>
  <ListItem>Public Figures</ListItem>
  <ListItem>Corporate Establishments</ListItem>
  <ListItem>Academicians</ListItem>
  <ListItem>Other Good-Spirited Individuals</ListItem>
</List>

        </Card>
      </CardContainer>
    </Section>
  );
};

export default InterventionStrategies;
