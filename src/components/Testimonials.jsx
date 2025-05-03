import React, { useState } from "react";
import styled from "styled-components";
import im1 from '../Images2/logo.jpeg';
import im2 from '../Images2/logo.jpeg';
import im3 from '../Images2/logo.jpeg';
import im4 from '../Images2/logo.jpeg';

// Styled Components
const CarouselSection = styled.section`
  background: #f8f9fa;
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 900;
  color: #1e3a8a;
  margin-bottom: 16px;
  text-transform: uppercase;


  @media(max-width:428px){
  font-size:2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 60px;
  font-weight: 500;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
`;

const CarouselWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;

@media(max-width:884px){
  flex-direction:column;
  align-items:center;
  gap:20px;
}

`;

const TestimonialCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  width: 270px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  text-align: center;
  margin: 0 10px;
`;

const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const Name = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 5px;
`;

const Role = styled.p`
  font-size: 15px;
  color: #6b7280;
  margin-bottom: 15px;
`;

const Feedback = styled.p`
  font-size: 16px;
  color: #4b5563;
  line-height: 1.5;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;

  ${(props) =>
    props.left
      ? `left: 10px;`
      : `right: 10px;`}

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Mary Nnedi",
      role: "Beneficiary",
      feedback:
        "Thanks to this foundation, I was able to continue my education. Their scholarship program has truly changed my life.",
      image: im1,
    },
    {
      name: "Chinwe Nancy",
      role: "Volunteer",
      feedback:
        "Volunteering with this foundation has been the most rewarding experience of my life. The smiles we create are priceless.",
      image: im2,
    },
    {
      name: "Sarah Leonard",
      role: "Donor",
      feedback:
        "I am proud to support this incredible organization. They are truly making a difference where it's needed most.",
      image: im3,
    },
    {
      name: "David Kim",
      role: "Partner",
      feedback:
        "Partnering with this foundation has been a fantastic journey. Their commitment to social impact is second to none.",
      image: im4,
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <CarouselSection id="testimonials">
      <Title>What Our Community Says 🗣️</Title>
      <Subtitle>
        Hear from those whose lives have been touched by our work. Their stories inspire us every day.
      </Subtitle>

      <CarouselWrapper>
        <CarouselTrack
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <ProfileImage src={testimonial.image} alt={testimonial.name} />
              <Name>{testimonial.name}</Name>
              <Role>{testimonial.role}</Role>
              <Feedback>{testimonial.feedback}</Feedback>
            </TestimonialCard>
          ))}
        </CarouselTrack>

        {/* <ArrowButton left onClick={handlePrevClick}>
          {"<"}
        </ArrowButton> */}
        {/* <ArrowButton onClick={handleNextClick}>{">"}</ArrowButton> */}
      </CarouselWrapper>
    </CarouselSection>
  );
};

export default Testimonials;
