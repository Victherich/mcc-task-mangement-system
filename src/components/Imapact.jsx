import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { FaSchool, FaHeartbeat, FaHandsHelping, FaUsers } from "react-icons/fa";

// Styled Components
const ImpactSection = styled.section`
  background: linear-gradient(135deg, #000030 0%, #2575fc 100%);
  color: #fff;
  padding: 100px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const Title = styled.h2`
  font-size: 38px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 16px;
  letter-spacing: 1.5px;
`;

const USP = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #ffdd57;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  max-width: 900px;
  margin: 0 auto 50px;
  line-height: 1.7;
  color: #f0f0f0;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 30px 25px;
  width: 260px;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.25);
  }
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 15px;
  color: #fff;
`;

const Count = styled.h3`
  font-size: 42px;
  font-weight: bold;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
`;

// Impact Component
const Impact = () => {
  return (
    <ImpactSection id="impact">
      <Title>Our Impacts 🌟</Title>
      <USP>Feeding Hope 🍲 | Empowering Women 👩‍👧 | Uplifting Children 🧒💖</USP>
      <Subtitle>
        At The Glory and Children Foundation, we believe that no woman or child should be left behind. From providing meals and basic needs to supporting education and healthcare — we are changing lives every single day.
      </Subtitle>

      <Container>
        <StatCard>
          <Icon><FaSchool /></Icon>
          <Count><CountUp start={0} end={20} duration={4} />+</Count>
          <Label>Children Educated 🏫</Label>
        </StatCard>

        <StatCard>
          <Icon><FaHeartbeat /></Icon>
          <Count><CountUp start={0} end={30} duration={4} />+</Count>
          <Label>Healthcare Drives ❤️</Label>
        </StatCard>

        <StatCard>
          <Icon><FaHandsHelping /></Icon>
          <Count><CountUp start={0} end={100} duration={4} />+</Count>
          <Label>Volunteers Empowered 💪</Label>
        </StatCard>

        <StatCard>
          <Icon><FaUsers /></Icon>
          <Count><CountUp start={0} end={10000} duration={4} />+</Count>
          <Label>Lives Impacted 🌍</Label>
        </StatCard>
      </Container>
    </ImpactSection>
  );
};

export default Impact;
