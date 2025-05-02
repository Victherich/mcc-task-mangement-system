import React from "react";
import styled from "styled-components";
import { FaBookOpen, FaHeartbeat, FaSeedling, FaUsers } from "react-icons/fa";

// Styled Components
const ProgramsSection = styled.section`
  background: #fff;
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
  color: rgba(0,0,255,0.5);
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  color: #555;
`;

const ProgramCard = styled.div`
  background: #f9f9f9;
  padding: 30px;
  width: 260px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: 0.3s;
  color: #555;
  
  &:hover {
    transform: scale(1.05);
    background: rgba(0,0,255,0.5);
    color: white;
  }
`;

const Icon = styled.div`
  font-size: 50px;
  color: rgba(0,0,255,0.5);
  margin-bottom: 15px;
  transition: 0.3s;
  
  ${ProgramCard}:hover & {
    color: white;
  }
`;

const ProgramTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProgramText = styled.p`
  font-size: 16px;
  color: #666;
  transition: 0.3s;
  
  ${ProgramCard}:hover & {
    color: white;
  }
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  background: #e67e22;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background: #d35400;
  }
`;

// Programs Component
const Programs = () => {
  return (
    <ProgramsSection id="programs">
      <Title>Our Programs & Initiatives 🌍</Title>
      <Subtitle>
        We are committed to improving lives through various community-driven programs.
        Explore our key initiatives and see how we make a difference.
      </Subtitle>

      <Container>
        {/* Education Program */}
        <ProgramCard>
          <Icon><FaBookOpen /></Icon>
          <ProgramTitle>Education for All 📚</ProgramTitle>
          <ProgramText>
            Providing quality education to underprivileged children.
          </ProgramText>
          {/* <ReadMoreButton href="/education">Learn More ➜</ReadMoreButton> */}
        </ProgramCard>

        {/* Healthcare Program */}
        <ProgramCard>
          <Icon><FaHeartbeat /></Icon>
          <ProgramTitle>Healthcare & Wellness ❤️</ProgramTitle>
          <ProgramText>
            Offering free medical checkups and health awareness.
          </ProgramText>
          {/* <ReadMoreButton href="/healthcare">Learn More ➜</ReadMoreButton> */}
        </ProgramCard>

        {/* Sustainability Program */}
        <ProgramCard>
          <Icon><FaSeedling /></Icon>
          <ProgramTitle>Environment & Sustainability 🌱</ProgramTitle>
          <ProgramText>
            Promoting tree planting and clean energy solutions.
          </ProgramText>
          {/* <ReadMoreButton href="/sustainability">Learn More ➜</ReadMoreButton> */}
        </ProgramCard>

        {/* Women Empowerment Program */}
        <ProgramCard>
          <Icon><FaUsers /></Icon>
          <ProgramTitle>Women Empowerment 👩‍💼</ProgramTitle>
          <ProgramText>
            Supporting women through training and business funding.
          </ProgramText>
          {/* <ReadMoreButton href="/women-empowerment">Learn More ➜</ReadMoreButton> */}
        </ProgramCard>
      </Container>
    </ProgramsSection>
  );
};

export default Programs;
