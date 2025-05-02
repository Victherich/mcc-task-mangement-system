import React from "react";
import styled from "styled-components";
import { FaHandsHelping, FaHandHoldingHeart, FaHandshake } from "react-icons/fa";

// Styled Components
const GetInvolvedSection = styled.section`
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

const ActionCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 30px;
  width: 280px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05);
    background: white;
    color: rgba(0,0,255,0.5);
  }
`;

const Icon = styled.div`
  font-size: 50px;
  color: white;
  margin-bottom: 15px;
  transition: 0.3s;
  
  ${ActionCard}:hover & {
    color: rgba(0,0,255,0.5);
  }
`;

const ActionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ActionText = styled.p`
  font-size: 16px;
  transition: 0.3s;
`;

const ActionButton = styled.a`
  display: inline-block;
  background: white;
  color: rgba(0,0,255,0.5);
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background: rgba(0,0,255,0.5);
    color: white;
  }
`;

// Get Involved Component
const GetInvolved = () => {
  return (
    <GetInvolvedSection id="get-involved">
      <Title>Get Involved 💖</Title>
      <Subtitle>
        Join us in making a difference! There are many ways to support our mission.  
        Whether through donations, volunteering, or partnerships, your help makes an impact.
      </Subtitle>

      <Container>
        {/* Donate */}
        <ActionCard>
          <Icon><FaHandHoldingHeart /></Icon>
          <ActionTitle>Donate Now 💰</ActionTitle>
          <ActionText>
            Support our projects with a one-time or recurring donation.
          </ActionText>
          <ActionButton href="/donate">Donate ➜</ActionButton>
        </ActionCard>

        {/* Volunteer */}
        <ActionCard>
          <Icon><FaHandsHelping /></Icon>
          <ActionTitle>Become a Volunteer 🙌</ActionTitle>
          <ActionText>
            Join our team and contribute your time and skills.
          </ActionText>
          <ActionButton href="/contactus">Volunteer ➜</ActionButton>
        </ActionCard>

        {/* Partner with Us */}
        <ActionCard>
          <Icon><FaHandshake /></Icon>
          <ActionTitle>Partner with Us 🤝</ActionTitle>
          <ActionText>
            Collaborate with us to create a bigger impact.
          </ActionText>
          <ActionButton href="/contactus">Partner ➜</ActionButton>
        </ActionCard>
      </Container>
    </GetInvolvedSection>
  );
};

export default GetInvolved;
