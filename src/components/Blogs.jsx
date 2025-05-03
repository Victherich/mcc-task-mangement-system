// import React, { useState } from 'react';
// import styled from 'styled-components';
// import blog1 from "../Images/blog1.png";
// import blog2 from "../Images/blog2.png";
// import blog3 from "../Images/blog3.png";
// import blog4 from "../Images/blog4.png";

// // Styled Components for styling
// const BlogsWrap = styled.div`
//   padding: 100px 20px;
//   background: #f9f9f9;
//   text-align: center;


//   @media(max-width:768px){
//     padding-top:50px;
//   }
// `;

// const BlogTitle = styled.h1`
//   font-size: 2.5rem;
//   color: rgba(0,0,255,0.5);
//   margin-bottom: 10px;
// `;

// const BlogIntro = styled.p`
//   font-size: 1.2rem;
//   color: #555;
//   margin-bottom: 50px;
//   max-width: 700px;
//   margin: 0 auto;
// `;

// const BlogPostsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
//   justify-content: center;
// `;

// const BlogPost = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
//   text-align: left;
//   transition: transform 0.3s ease-in-out;
  
//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const BlogImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 10px;
// `;

// const PostInfo = styled.div`
//   padding: 15px 0;
// `;

// const PostTitle = styled.h2`
//   font-size: 1.5rem;
//   color: #3498db;
// `;

// const PostMeta = styled.p`
//   font-size: 0.9rem;
//   color: #777;
// `;

// const PostContent = styled.p`
//   font-size: 1rem;
//   color: #333;
// `;

// const ReadMoreButton = styled.button`
//   background: #3498db;
//   color: white;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: background 0.3s ease-in-out;

//   &:hover {
//     background: #2980b9;
//   }
// `;

// const Blogs = () => {
//   // Blog post data
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'Empowering Women: Building a Stronger Future',
//       author: 'Eze Mbionwu Foundation',
//       date: 'Feb 20, 2025',
//       imageUrl: `${blog1}`,
//       content: 'Women empowerment is at the heart of sustainable development. By providing education, vocational training, and financial support, we enable women to become self-reliant and contribute to their communities. Through our programs, we have helped over 5,000 women start small businesses, access micro-loans, and receive leadership training. Empowering women means empowering families, strengthening economies, and ensuring a more equitable society.',
//     },
//     {
//       id: 2,
//       title: 'Healthcare for All: Ensuring a Healthier Tomorrow',
//       author: 'Eze Mbionwu Foundation',
//       date: 'Feb 18, 2025',
//       imageUrl: `${blog2}`,
//       content: 'Access to quality healthcare is a fundamental right. Our foundation provides free medical check-ups, maternal health services, and health education programs in underserved communities. In 2024 alone, we organized 30+ medical outreach programs, reaching thousands of people. Through partnerships with healthcare professionals, we offer screenings, immunizations, and treatment for preventable diseases, ensuring no one is left behind.',
//     },
//     {
//       id: 3,
//       title: 'Sustainability Matters: Protecting Our Environment',
//       author: 'Eze Mbionwu Foundation',
//       date: 'Feb 15, 2025',
//       imageUrl: `${blog3}`,
//       content: 'Environmental sustainability is crucial for future generations. Our NGO promotes tree planting, waste management education, and renewable energy initiatives. We have planted over 50,000 trees, conducted eco-awareness campaigns in schools, and supported clean energy solutions in rural areas. A greener planet starts with informed communities taking small but meaningful actions every day.',
//     },
//     {
//       id: 4,
//       title: 'Educating the Girl Child: Breaking Barriers, Building Dreams',
//       author: 'Eze Mbionwu Foundation',
//       date: 'Feb 10, 2025',
//       imageUrl: `${blog4}`,
//       content: 'Every girl deserves the right to education. Unfortunately, many girls face barriers such as early marriage, poverty, and cultural norms. Our foundation runs scholarship programs, mentorship initiatives, and advocacy campaigns to ensure girls have equal opportunities to learn and thrive. An educated girl is a powerful force for change in her community and beyond.',
//     },
//   ];

//   // State to manage expanded state of each blog post
//   const [expandedPost, setExpandedPost] = useState(null);

//   // Function to toggle expand/collapse of a blog post
//   const toggleExpand = (postId) => {
//     setExpandedPost(expandedPost === postId ? null : postId);
//   };

//   return (
//     <BlogsWrap>
//       <BlogTitle>Our Blog</BlogTitle>
//       <BlogIntro>Explore our latest insights on women empowerment, healthcare, sustainability, and education.</BlogIntro>
//       <BlogPostsGrid>
//         {blogPosts.map(post => (
//           <BlogPost key={post.id}>
//             <BlogImage src={post.imageUrl} alt={post.title} />
//             <PostInfo>
//               <PostTitle>{post.title}</PostTitle>
//               <PostMeta><strong>Author:</strong> {post.author}</PostMeta>
//               <PostMeta><strong>Date:</strong> {post.date}</PostMeta>
//               <PostContent>
//                 {expandedPost === post.id ? post.content : `${post.content.slice(0, 150)}...`}
//               </PostContent>
//               <ReadMoreButton onClick={() => toggleExpand(post.id)}>
//                 {expandedPost === post.id ? 'Read Less' : 'Read More'}
//               </ReadMoreButton>
//             </PostInfo>
//           </BlogPost>
//         ))}
//       </BlogPostsGrid>
//     </BlogsWrap>
//   );
// }

// export default Blogs;




import React from "react";
import styled from "styled-components";
import blogImage1 from "../Images2/b1.jpg"; // Replace with actual blog images
import blogImage2 from "../Images2/b2.jpg"; // Replace with actual blog images
import blogImage3 from "../Images2/b3.jpg"; // Replace with actual blog images
import herobg from '../Images2/im3.jpeg'

// Styled Components
const BlogPageContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
`;

const HeroSection = styled.section`
  background-image: url(${herobg}); // Hero background image
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
  padding-top:200px;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto 30px;
  text-align: center;
  line-height: 1.6;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
`;

const BlogSection = styled.section`
  padding: 60px 20px;
  background-color: #f4f4f4;
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
`;

const BlogPost = styled.div`
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 30%;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 20px;
`;

const PostTitle = styled.h3`
  font-size: 24px;
  color: #1e3a8a;
  margin-bottom: 10px;
`;

const PostExcerpt = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ReadMoreLink = styled.a`
  font-size: 16px;
  color: #f9a825;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #d35400;
  }
`;

// Blog Page Component
const BlogS = () => {
  return (
    <BlogPageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>Our Blogs</HeroTitle>
        <HeroSubtitle>
          Discover the impact we're making in communities.
        </HeroSubtitle>
      </HeroSection>

      {/* Blog Section */}
      <BlogSection>
      <BlogContainer>
  {/* Blog Post 1 */}
  <BlogPost>
    <PostImage src={blogImage1} alt="Empowering Women" />
    <PostContent>
      <PostTitle>Rising Together: Empowering Women to Lead</PostTitle>
      <PostExcerpt>
        When women are uplifted, communities rise with them. Empowerment is not just about opportunity—it's about giving voice, confidence, and leadership to the ones who shape our world. We believe in a future where every woman thrives.
      </PostExcerpt>
     
    </PostContent>
  </BlogPost>

  {/* Blog Post 2 */}
  <BlogPost>
    <PostImage src={blogImage2} alt="Feeding Hungry Kids" />
    <PostContent>
      <PostTitle>Hope on a Plate: Nourishing Young Dreams</PostTitle>
      <PostExcerpt>
        Hunger steals potential. Every meal we provide isn't just food—it's a promise. A promise that no child will be left behind in the pursuit of growth, joy, and education. Together, we feed futures and fuel dreams.
      </PostExcerpt>

    </PostContent>
  </BlogPost>

  {/* Blog Post 3 */}
  <BlogPost>
    <PostImage src={blogImage3} alt="Healthcare for Women and Children" />
    <PostContent>
      <PostTitle>Healing Hearts: Health for Every Woman & Child</PostTitle>
      <PostExcerpt>
        Access to healthcare is dignity. Every mother and every child deserves a life of wellness and safety. Through care, compassion, and action, we’re creating healthier futures and stronger communities.
      </PostExcerpt>
   
    </PostContent>
  </BlogPost>
</BlogContainer>

      </BlogSection>
    </BlogPageContainer>
  );
};

export default BlogS;

