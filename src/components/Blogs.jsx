import React, { useState } from 'react';
import styled from 'styled-components';
import blog1 from "../Images/blog1.png";
import blog2 from "../Images/blog2.png";
import blog3 from "../Images/blog3.png";
import blog4 from "../Images/blog4.png";

// Styled Components for styling
const BlogsWrap = styled.div`
  padding: 100px 20px;
  background: #f9f9f9;
  text-align: center;


  @media(max-width:768px){
    padding-top:50px;
  }
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: rgba(0,0,255,0.5);
  margin-bottom: 10px;
`;

const BlogIntro = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 50px;
  max-width: 700px;
  margin: 0 auto;
`;

const BlogPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
`;

const BlogPost = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const PostInfo = styled.div`
  padding: 15px 0;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #3498db;
`;

const PostMeta = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #333;
`;

const ReadMoreButton = styled.button`
  background: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #2980b9;
  }
`;

const Blogs = () => {
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Women: Building a Stronger Future',
      author: 'Eze Mbionwu Foundation',
      date: 'Feb 20, 2025',
      imageUrl: `${blog1}`,
      content: 'Women empowerment is at the heart of sustainable development. By providing education, vocational training, and financial support, we enable women to become self-reliant and contribute to their communities. Through our programs, we have helped over 5,000 women start small businesses, access micro-loans, and receive leadership training. Empowering women means empowering families, strengthening economies, and ensuring a more equitable society.',
    },
    {
      id: 2,
      title: 'Healthcare for All: Ensuring a Healthier Tomorrow',
      author: 'Eze Mbionwu Foundation',
      date: 'Feb 18, 2025',
      imageUrl: `${blog2}`,
      content: 'Access to quality healthcare is a fundamental right. Our foundation provides free medical check-ups, maternal health services, and health education programs in underserved communities. In 2024 alone, we organized 30+ medical outreach programs, reaching thousands of people. Through partnerships with healthcare professionals, we offer screenings, immunizations, and treatment for preventable diseases, ensuring no one is left behind.',
    },
    {
      id: 3,
      title: 'Sustainability Matters: Protecting Our Environment',
      author: 'Eze Mbionwu Foundation',
      date: 'Feb 15, 2025',
      imageUrl: `${blog3}`,
      content: 'Environmental sustainability is crucial for future generations. Our NGO promotes tree planting, waste management education, and renewable energy initiatives. We have planted over 50,000 trees, conducted eco-awareness campaigns in schools, and supported clean energy solutions in rural areas. A greener planet starts with informed communities taking small but meaningful actions every day.',
    },
    {
      id: 4,
      title: 'Educating the Girl Child: Breaking Barriers, Building Dreams',
      author: 'Eze Mbionwu Foundation',
      date: 'Feb 10, 2025',
      imageUrl: `${blog4}`,
      content: 'Every girl deserves the right to education. Unfortunately, many girls face barriers such as early marriage, poverty, and cultural norms. Our foundation runs scholarship programs, mentorship initiatives, and advocacy campaigns to ensure girls have equal opportunities to learn and thrive. An educated girl is a powerful force for change in her community and beyond.',
    },
  ];

  // State to manage expanded state of each blog post
  const [expandedPost, setExpandedPost] = useState(null);

  // Function to toggle expand/collapse of a blog post
  const toggleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <BlogsWrap>
      <BlogTitle>Our Blog</BlogTitle>
      <BlogIntro>Explore our latest insights on women empowerment, healthcare, sustainability, and education.</BlogIntro>
      <BlogPostsGrid>
        {blogPosts.map(post => (
          <BlogPost key={post.id}>
            <BlogImage src={post.imageUrl} alt={post.title} />
            <PostInfo>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta><strong>Author:</strong> {post.author}</PostMeta>
              <PostMeta><strong>Date:</strong> {post.date}</PostMeta>
              <PostContent>
                {expandedPost === post.id ? post.content : `${post.content.slice(0, 150)}...`}
              </PostContent>
              <ReadMoreButton onClick={() => toggleExpand(post.id)}>
                {expandedPost === post.id ? 'Read Less' : 'Read More'}
              </ReadMoreButton>
            </PostInfo>
          </BlogPost>
        ))}
      </BlogPostsGrid>
    </BlogsWrap>
  );
}

export default Blogs;
