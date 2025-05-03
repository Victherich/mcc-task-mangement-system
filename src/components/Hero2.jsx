

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
import im1 from '../Images2/im1.jpeg';
import im2 from '../Images2/im2.jpeg';
import im3 from '../Images2/im3.jpeg';
import im4 from '../Images2/im4.jpeg';
import im5 from '../Images2/im5.jpeg';
import im6 from '../Images2/im6.jpeg';
import im7 from '../Images2/im7.jpeg';
import im8 from '../Images2/im8.jpeg';
import im9 from '../Images2/im9.jpeg';
import im10 from '../Images2/im10.jpeg';
import im11 from '../Images2/im11.jpeg';
import im12 from '../Images2/im12.jpeg';
import im13 from '../Images2/im13.jpeg';
import im14 from '../Images2/im14.jpeg';
// import im15 from '../Images2/im15.jpeg';
// import im16 from '../Images2/im16.jpeg';
// import im17 from '../Images2/im17.jpeg';
// import im18 from '../Images2/im18.jpeg';



// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80vh;
  background: linear-gradient(90deg, #0f172a, #1e293b);
  overflow: hidden;
  color: #ffffff;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  opacity: 0;
  transform: translateY(50px);
  animation: ${(props) => props.isVisible ? 'flyInFromBottom 3s ease-out forwards' : 'none'};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

   @media (max-width: 428px) {
    font-size: 1.5rem;
  }

  @keyframes flyInFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(-50px);
  animation: ${(props) => props.isVisible ? 'flyInFromTop 1s ease-out forwards' : 'none'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

   @media (max-width: 428px) {
    font-size: 1rem;
  }

  @keyframes flyInFromTop {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Slider = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s linear;
`;

const CarImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  flex-shrink: 0;
`;

// Hero Component
const Hero2 = () => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

const images = [
  // im1,
  // im2,
  im3,
  im4,
  im5,
  im6,
  im7,
  im8,
  im9,
  im10,
  im11,
  im12,
  im13,
  im14,
  // im15,
  // im16,
  // im17,
  // im18
];


  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const totalImages = images.length;
        const nextPosition = (prev + 1) % totalImages;
        return nextPosition;
      });
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Intersection Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  return (
    <HeroContainer ref={sliderRef}>
      <HeroContent>
      <HeroTitle isVisible={isVisible}>Empowering Communities, Transforming Lives.</HeroTitle>
<HeroSubtitle isVisible={isVisible}>
  {/* Empowering Communities, Transforming Lives.   */}
</HeroSubtitle>

      </HeroContent>
      <Slider
        style={{ transform: `translateX(-${position * 100}vw)` }}
      >
        {images.concat(images).map((car, index) => (
          <CarImage key={index} src={car} alt={`Car ${index + 1}`} />
        ))}
      </Slider>
    </HeroContainer>
  );
};

export default Hero2;

