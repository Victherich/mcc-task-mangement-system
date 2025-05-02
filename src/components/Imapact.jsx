import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { FaSchool, FaHeartbeat, FaHandsHelping, FaUsers } from "react-icons/fa";

// Styled Components
const ImpactSection = styled.section`
  background: linear-gradient(135deg, rgba(0,0,255,0.1), rgba(0,0,255,0.8));
  color: white;
  padding: 80px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 25px;
  width: 250px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.div`
  font-size: 40px;
  color: #fff;
  margin-bottom: 10px;
`;

const Count = styled.h3`
  font-size: 40px;
  font-weight: bold;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

// Impact Component
const Impact = () => {
  return (
    <ImpactSection id="impact">
      <Title>Our Impact & Achievements 🌍</Title>
      <Subtitle>
        Through our dedication and community-driven initiatives, we have transformed lives and created lasting change in countless communities.
      </Subtitle>
      
      <Container>
        {/* Schools Built */}
        <StatCard>
          <Icon><FaSchool /></Icon>
          {/* <Count><CountUp start={0} end={50} duration={4} />+</Count> */}
          <Label>Education 🏫</Label>
        </StatCard>

        {/* Healthcare Centers */}
        <StatCard>
          <Icon><FaHeartbeat /></Icon>
          {/* <Count><CountUp start={0} end={30} duration={4} />+</Count> */}
          <Label>Healthcare ❤️</Label>
        </StatCard>

        {/* Volunteers */}
        <StatCard>
          <Icon><FaHandsHelping /></Icon>
          {/* <Count><CountUp start={0} end={500} duration={4} />+</Count> */}
          <Label>Active Volunteers 💪</Label>
        </StatCard>

        {/* Lives Impacted */}
        <StatCard>
          <Icon><FaUsers /></Icon>
          {/* <Count><CountUp start={0} end={10000} duration={4} />+</Count> */}
          <Label>Lives Transformed 🌟</Label>
        </StatCard>
      </Container>
    </ImpactSection>
  );
};

export default Impact;
