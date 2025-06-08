import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import eent_flier from "../Images2/padflier.jpeg";
// import extraImage1 from "../Images2/event2.jpeg";
import padmedia from "../Images2/padmedia.mp4";
import im15 from "../Images2/im15.mp4";
import im16 from "../Images2/im16.mp4";
import im18 from '../Images2/im18.mp4'

const EventsWrapper = styled.div`
  padding: 60px 20px;
  background: rgba(0,0,255,0.1);
  text-align: center;
  border-bottom:4px solid #000050;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #1a237e;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #222;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const MediaGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const VideoWrapper = styled.div`
//   width: 300px;
  position: relative;
  
`;

const StyledVideo = styled.video`
  width: 100%;
  height:476px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 300px;
`;

const FlierImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const Events = () => {
    const videoRefs = useRef([]);

    useEffect(() => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.playbackRate = 0.5; // Set to desired speed
        }
      });
    }, []);

  return (
    <EventsWrapper>
      <Title>Our Events</Title>
      <Subtitle>
        At The Glory and Children Foundation, every event is a spark of hope, a moment of unity, and a celebration of change.
        Through these gatherings, we empower women, uplift children, and create waves of impact that extend beyond the day.
        Join us as we make love visible through action, compassion, and purpose.
      </Subtitle>

      <MediaGrid>
        {/* Facebook Embedded Video */}
        <VideoWrapper>
            <StyledVideo
              src={padmedia}
              muted
              autoPlay
              loop
              playsInline
              controls
            //   onClick={() => handleVideoClick(index)}
            //   ref={(el) => (videoRefs.current[index] = el)}
            />
          </VideoWrapper>

        {/* Local Videos with autoplay muted, click to unmute */}
        {[im15, im16, im18].map((src, index) => (
          <VideoWrapper key={index}>
            <StyledVideo
              src={src}
              muted
              autoPlay
              loop
              playsInline
           
              ref={(el) => (videoRefs.current[index] = el)}
            />
          </VideoWrapper>
        ))}

        {/* Images */}
        {[eent_flier].map((src, index) => (
          <ImageWrapper key={index}>
            <FlierImage src={src} alt={`Event ${index + 1}`} />
          </ImageWrapper>
        ))}
      </MediaGrid>
    </EventsWrapper>
  );
};

export default Events;



// thegloryandchildrenfoundation