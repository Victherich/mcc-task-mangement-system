import React from "react";
import styled from "styled-components";
import { FaHandsHelping, FaGlobeAfrica, FaUsers } from "react-icons/fa";
// import ab1 from '../Images/ab1.jpg'
// import ab2 from '../Images/ab2.jpg'
import ab1 from '../Images/election.jpeg'
import ab2 from '../Images/launch.jpeg'

// Styled Components
const AboutSection = styled.section`
  background: #f9f9f9;
  padding: 80px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: left;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color:rgba(0,0,255,0.5);
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  background: rgba(0,0,255,0.5);
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: rgba(0,0,255,0.7);
  }
`;

const RightContent = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ImageCard = styled.div`
  width: 250px;
  height: 250px;
  background: url(${(props) => props.img}) no-repeat center center/cover;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-position:top;
`;

// Icon Cards
const IconCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const IconCard = styled.div`
  flex: 1;
  min-width: 150px;
  text-align: center;
  padding: 20px;
`;

const Icon = styled.div`
  font-size: 40px;
  color: rgba(0,0,255,0.5);
  margin-bottom: 10px;
`;

const IconText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

// About Us Component
const AboutComponent = () => {
  return (
    <AboutSection id="about">
      <Container>
        {/* Left Content */}
        <LeftContent>
          <Title>About Eze Mbionwu Foundation 🎗️</Title>
          <Subtitle>
            We are committed to empowering communities and creating stability through education, healthcare, and development programs.  
            Our mission is to uplift lives and provide opportunities for those in need.  
          </Subtitle>
          <Subtitle>
            🌍 Operating across multiple regions, we have impacted lives through education, medical aids, and supporting
            sustainable development projects.  
          </Subtitle>
          <ReadMoreButton href="/aboutus">Read More ➜</ReadMoreButton>
        </LeftContent>

        {/* Right Content */}
        <RightContent>
          <ImageCard img={ab1} />
          <ImageCard img={ab2} />
        </RightContent>
      </Container>

      {/* Icons Section */}
      <IconCardContainer>
        <IconCard>
          <Icon><FaHandsHelping /></Icon>
          <IconText>100+ Volunteers</IconText>
        </IconCard>
        <IconCard>
          <Icon><FaGlobeAfrica /></Icon>
          <IconText>5+ Countries</IconText>
        </IconCard>
        <IconCard>
          <Icon><FaUsers /></Icon>
          <IconText>5,000+ Lives Impacted</IconText>
        </IconCard>
      </IconCardContainer>
    </AboutSection>
  );
};

export default AboutComponent;
