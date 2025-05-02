import React from "react";
import styled from "styled-components";
import launchBanner from "../Images/launch.jpeg"; // Add the launching banner image
import electionObservation from "../Images/election.jpeg"; // Add election observation image
import launchBanner2 from "../Images/au1.png"; 

const AuthenticityPage = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroText>
          <h1>Authenticity & Official Launching</h1>
          <p>Building trust through transparency, impact, and official recognition.</p>
        </HeroText>
      </HeroSection>

      {/* Foundation Authenticity Section */}
      <ContentSection>
        <TextBlock>
          <h2>🔹 Our Authenticity & Legal Recognition</h2>
          <p>
            Eze Mbionwu Foundation for Community Development and Stability (EMFCDS)
            is a fully registered Non-Governmental Organization (NGO) under the
            Corporate Affairs Commission (CAC). We operate with transparency,
            accountability, and a commitment to social impact.
          </p>
          <p>
            Our mission aligns with national and global development goals, ensuring
            we create real, sustainable change in the lives of individuals and communities.
          </p>
        </TextBlock>
      </ContentSection>

      {/* Official Launching Section */}
      <ImageSection>
        <img src={launchBanner} alt="Official Launching of the NGO" />
        <TextBlock>
          <h2>🎉 Official Launching of the NGO</h2>
          <p>
            On our official launch day, we gathered with esteemed guests, community
            leaders, and stakeholders to mark the beginning of our journey in making
            a difference. This event symbolized our dedication to community
            development and empowerment.
          </p>
          <p>
            The launch featured keynote speeches, project presentations, and a
            commitment to driving positive social change through education,
            empowerment, and sustainable development.
          </p>
        </TextBlock>
      </ImageSection>

      {/* 2019 General Election Observation Section */}
      <ImageSection reverse>
        <TextBlock>
          <h2>🗳️ NGO’s Role in the 2019 General Election Observation</h2>
          <p>
            As part of our commitment to democracy and good governance, our
            foundation actively participated in observing the 2019 General Elections.
          </p>
          <p>
            Our mission was to ensure transparency, fairness, and voter education.
            Our team was deployed across various polling units, monitoring the voting
            process and ensuring that democratic principles were upheld.
          </p>
          <p>
            By engaging in this crucial civic responsibility, we reinforced our
            dedication to promoting justice, equality, and community engagement in
            governance.
          </p>
        </TextBlock>
        <img src={electionObservation} alt="NGO Observing 2019 General Elections" />
      </ImageSection>

      {/* Call to Action Section */}
      {/* <CallToAction>
        <h2>Join Us in Creating a Lasting Impact! 💙</h2>
        <p>Support our mission and be part of the change.</p>
        <button>Get Involved</button>
      </CallToAction> */}
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div`
  font-family: "Arial", sans-serif;
  color: #333;
  padding: 20px;

  @media(max-width:768px){
    padding:5px;
  }

  
`;

const HeroSection = styled.div`
  background: url(${launchBanner2}) no-repeat center center/cover;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
//   background-position:bottom;

@media(max-width:768px){
    padding-top:100px;
  }
`;

const HeroText = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  color: #fff;
  border-radius: 10px;
  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
  }
`;

const ContentSection = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;


 
`;

const TextBlock = styled.div`
  max-width: 800px;
  text-align: left;
  h2 {
    color: rgba(0,0,255,0.5);
    font-size: 28px;
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 10px;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  padding: 50px;
  img {
    width: 50%;
    height: auto;
    border-radius: 10px;
    margin: 0 20px;
  }



   @media(max-width:768px){
    flex-direction:column;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  padding: 40px;
  background: #0056b3;
  color: white;
  border-radius: 10px;
  margin: 50px auto;
  max-width: 800px;
  h2 {
    font-size: 28px;
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  button {
    background: white;
    color: #0056b3;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
  }
  button:hover {
    background: #fff;
    color: #003a80;
  }
`;

export default AuthenticityPage;
