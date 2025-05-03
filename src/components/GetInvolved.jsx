import React from "react";
import styled, { keyframes } from "styled-components";
import { FaHandsHelping, FaHandHoldingHeart, FaHandshake } from "react-icons/fa";

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const Section = styled.section`
  background: radial-gradient(circle at top, #0a0a23 20%, #000033 100%);
  color: #fff;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #dcdcdc;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.7;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${float} 6s ease-in-out infinite;
`;

const Icon = styled.div`
  font-size: 60px;
  color: #ffd700;
  margin-bottom: 20px;
  transition: 0.3s;
  filter: drop-shadow(0 0 10px #ffd700);
`;

const Label = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  max-width: 280px;
  color: #ccc;
  line-height: 1.6;
`;

const ActionButton = styled.a`
  margin-top: 15px;
  display: inline-block;
  padding: 10px 25px;
  font-weight: bold;
  color: #000033;
  background: #ffd700;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #ffa500;
    color: #000;
  }
`;

const GetInvolved = () => {
  return (
    <Section id="get-involved">
      <Wrapper>
        <Title>🌠 Join Our Orbit of Impact</Title>
        <Subtitle>
          Be a vital force in our universe of hope. Whether you give, serve, or partner,
          you help us launch brighter futures for women and children.
        </Subtitle>

        <Actions>
          <Action>
            <Icon><FaHandHoldingHeart /></Icon>
            <Label>Donate to Fuel Change 💛</Label>
            <Text>
              Every contribution lights up a life — providing food, shelter, and education for those in urgent need.
            </Text>
            <ActionButton href="/donate">Donate ➜</ActionButton>
          </Action>

          <Action>
            <Icon><FaHandsHelping /></Icon>
            <Label>Volunteer with Heart 🤲</Label>
            <Text>
              Bring your energy and time to missions that matter — help feed the hungry and inspire hope.
            </Text>
            <ActionButton href="/contactus">Volunteer ➜</ActionButton>
          </Action>

          <Action>
            <Icon><FaHandshake /></Icon>
            <Label>Partner for Bigger Impact 🌍</Label>
            <Text>
              Let’s unite organizations, skills, and dreams — because collaboration multiplies change.
            </Text>
            <ActionButton href="/contactus">Partner ➜</ActionButton>
          </Action>
        </Actions>
      </Wrapper>
    </Section>
  );
};

export default GetInvolved;
