import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import freewill from '../Images/freewill.jpg';
import donor from '../Images/donor.jpg'
import benefit from '../Images/benefit.jpg'
import partner from '../Images/partner.png'

// Styled Components
const TestimonialsSection = styled.section`
  background: #f4f4f4;
  padding: 80px 20px;
  text-align: center;
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

const TestimonialCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 10px;
  max-width:600px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit:cover;
//   margin-bottom: 15px;
margin:0 auto;
margin-bottom:10px;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const Role = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

const Feedback = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <TestimonialsSection id="testimonials">
      <Title>Testimonials & Success Stories 🗣️</Title>
      <Subtitle>
        Hear from the people whose lives have been positively transformed by our work.
      </Subtitle>

      <Slider {...settings}>
        {/* Testimonial 1 */}
        <TestimonialCard>
          <ProfileImage src={benefit} alt="User" />
          <Name>Mary Nnedi</Name>
          <Role>Beneficiary</Role>
          <Feedback>
            "Thanks to this NGO, I was able to continue my education. Their scholarship program changed my life!"
          </Feedback>
        </TestimonialCard>

        {/* Testimonial 2 */}
        <TestimonialCard>
          <ProfileImage src={freewill} alt="User" />
          <Name>Chinwe Nancy</Name>
          <Role>Volunteer</Role>
          <Feedback>
            "Volunteering here has been the most rewarding experience. Seeing the smiles on people's faces is priceless!"
          </Feedback>
        </TestimonialCard>

        {/* Testimonial 3 */}
        <TestimonialCard>
          <ProfileImage src={donor} alt="User" />
          <Name>Sarah Leonard</Name>
          <Role>Donor</Role>
          <Feedback>
            "I trust this organization completely. They are truly making an impact where it's needed the most."
          </Feedback>
        </TestimonialCard>

        {/* Testimonial 4 */}
        <TestimonialCard>
          <ProfileImage src={partner} alt="User" />
          <Name>David Kim</Name>
          <Role>Partner</Role>
          <Feedback>
            "Partnering with this NGO has been an incredible journey. Their dedication to social impact is unmatched!"
          </Feedback>
        </TestimonialCard>
      </Slider>
    </TestimonialsSection>
  );
};

export default Testimonials;
