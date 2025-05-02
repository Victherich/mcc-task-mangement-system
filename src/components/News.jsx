import React from "react";
import styled from "styled-components";
import e1 from '../Images/e1.jpg'
import e2 from '../Images/e2.jpg'
import e3 from '../Images/e3.jpg'

// Styled Components
const NewsSection = styled.section`
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

const NewsCard = styled.div`
  background: #f9f9f9;
  padding: 20px;
  width: 300px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  color:#555;

  &:hover {
    transform: translateY(-5px);
    background: rgba(0,0,255,0.5);
    color: white;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const NewsTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
//   color:#555;
`;

const NewsText = styled.p`
  font-size: 16px;
  color: #666;
  transition: 0.3s;
  
  ${NewsCard}:hover & {
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

// News Component
const News = () => {
  const newsItems = [
    {
      id: 1,
      image: e1,
      title: "Our Recent Outreach Program Was a Huge Success!",
      description: "We reached several families in need, providing food, medical aid, and education support.",
      link: "/news1",
    },
    {
      id: 2,
      image: e2,
      title: "Join Our Upcoming Volunteer Training",
      description: "Contact us to become a volunteer and make a direct impact on communities in need.",
      link: "/news2",
    },
    {
      id: 3,
      image: e3,
      title: "New Healthcare Initiative!",
      description: "We wish to launch a free healthcare program to provide medical services to underprivileged areas.",
      link: "/news3",
    },
  ];

  return (
    <NewsSection id="news">
      <Title>Latest News & Updates 📰</Title>
      <Subtitle>
        Stay updated with our latest projects, success stories, and upcoming events.
      </Subtitle>

      <Container>
        {newsItems.map((news) => (
          <NewsCard key={news.id}>
            <NewsImage src={news.image} alt={news.title} />
            <NewsTitle>{news.title}</NewsTitle>
            <NewsText>{news.description}</NewsText>
            {/* <ReadMoreButton href={news.link}>Read More ➜</ReadMoreButton> */}
          </NewsCard>
        ))}
      </Container>
    </NewsSection>
  );
};

export default News;
