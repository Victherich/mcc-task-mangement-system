// import React from "react";
// import styled from "styled-components";
// import { FaUtensils, FaChalkboardTeacher, FaLeaf, FaFemale } from "react-icons/fa";

// // Styled Components
// const Section = styled.section`
//   background: #fdfcfb;
//   padding: 100px 20px;
//   text-align: center;
// `;

// const Wrapper = styled.div`
//   max-width: 1100px;
//   margin: 0 auto;
// `;

// const Title = styled.h2`
//   font-size: 38px;
//   font-weight: 800;
//   color: #000050;
//   margin-bottom: 16px;
// `;

// const Highlight = styled.p`
//   font-size: 20px;
//   color: #e63946;
//   font-weight: 600;
//   margin-bottom: 10px;
// `;

// const Description = styled.p`
//   font-size: 17px;
//   color: #333;
//   max-width: 800px;
//   margin: 0 auto 60px;
//   line-height: 1.7;
// `;

// const ProgramList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 60px;
// `;

// const ProgramItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Icon = styled.div`
//   font-size: 60px;
//   color: #4361ee;
//   margin-bottom: 20px;
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.2);
//   }
// `;

// const ProgramTitle = styled.h3`
//   font-size: 24px;
//   font-weight: bold;
//   color: #000050;
//   margin-bottom: 12px;
// `;

// const ProgramText = styled.p`
//   font-size: 16px;
//   color: #444;
//   max-width: 600px;
//   line-height: 1.6;
// `;

// const Programs = () => {
//   return (
//     <Section id="programs">
//       <Wrapper>
//         <Title>Transforming Lives Through Purpose 🕊️</Title>
//         <Highlight>Solving Hunger. Empowering Women. Protecting the Future.</Highlight>
//         <Description>
//           At The Glory and Children Foundation, our work is rooted in compassion and action.
//           Every program we run tackles core issues — starting with hunger — and builds a path
//           toward dignity, sustainability, and self-reliance.
//         </Description>

//         <ProgramList>
//           <ProgramItem>
//             <Icon><FaUtensils /></Icon>
//             <ProgramTitle>Feeding the Hungry 🍲</ProgramTitle>
//             <ProgramText>
//               We deliver meals and food supplies to malnourished children, struggling mothers, and low-income families — because no one deserves to go to bed hungry.
//             </ProgramText>
//           </ProgramItem>

//           <ProgramItem>
//             <Icon><FaChalkboardTeacher /></Icon>
//             <ProgramTitle>Opening Doors Through Education 📘</ProgramTitle>
//             <ProgramText>
//               From school fees to books, we’re helping children stay in school and thrive — giving them the tools to build a better tomorrow.
//             </ProgramText>
//           </ProgramItem>

//           <ProgramItem>
//             <Icon><FaFemale /></Icon>
//             <ProgramTitle>Empowering Women to Rise 👩🏽‍💼</ProgramTitle>
//             <ProgramText>
//               We train and support women with life skills, small business funding, and mentorship — helping them become confident providers and changemakers.
//             </ProgramText>
//           </ProgramItem>

//           <ProgramItem>
//             <Icon><FaLeaf /></Icon>
//             <ProgramTitle>Creating a Sustainable Future 🌱</ProgramTitle>
//             <ProgramText>
//               Through environmental education, clean water access, and tree planting, we’re preserving our planet for generations to come.
//             </ProgramText>
//           </ProgramItem>
//         </ProgramList>
//       </Wrapper>
//     </Section>
//   );
// };

// export default Programs;











import React from "react";
import styled from "styled-components";
import { FaUtensils, FaChalkboardTeacher, FaLeaf, FaFemale } from "react-icons/fa";

// Styled Components
const Section = styled.section`
  // background: #fdfcfb;
  background:rgba(0,0,255,0.1);
  padding: 100px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 38px;
  font-weight: 800;
  color: #000050;
  margin-bottom: 16px;
`;

const Highlight = styled.p`
  font-size: 20px;
  color: #e63946;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 17px;
  // color: #111;
  font-weight:500;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.7;
  z-index:99;
`;

const ProgramList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const ProgramItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 60px;
  color: #4361ee;
  margin-bottom: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const ProgramTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #000050;
  margin-bottom: 12px;
  z-index:99;
`;

const ProgramText = styled.p`
  font-size: 1.1rem;
  // color: #111;
  max-width: 600px;
  line-height: 1.6;
  font-weight:500;
  z-index:99;
`;

// Artistic Background Elements (Shapes & Patterns)
const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
`;

const Shape = styled.div`
  position: absolute;
  background: linear-gradient(135deg, rgba(255, 228, 107, 0.5), rgba(255, 99, 132, 0.5));
  border-radius: 50%;
  width: 400px;
  height: 400px;
  animation: move 12s ease-in-out infinite;
  opacity: 0.5;
  transform: scale(1.2);
`;

const ShapeOne = styled(Shape)`
  top: 10%;
  left: 10%;
  animation-duration: 14s;
`;

const ShapeTwo = styled(Shape)`
  top: 50%;
  left: 40%;
  animation-duration: 16s;
`;

const ShapeThree = styled(Shape)`
  top: 30%;
  right: 20%;
  animation-duration: 18s;
`;

const ShapeFour = styled(Shape)`
  top: 70%;
  left: 30%;
  animation-duration: 20s;
`;

// Animation for movement of shapes
const move = `
  @keyframes move {
    0% {
      transform: translateX(-100px) translateY(-100px);
    }
    50% {
      transform: translateX(100px) translateY(100px);
    }
    100% {
      transform: translateX(-100px) translateY(-100px);
    }
  }
`;

const Programs = () => {
  return (
    <Section id="programs">
      {/* Background Artistic Shapes */}
      <BackgroundShapes>
        <ShapeOne />
        <ShapeTwo />
        <ShapeThree />
        <ShapeFour />
      </BackgroundShapes>

      <Wrapper>
        <Title>Transforming Lives Through Purpose 🕊️</Title>
        <Highlight>Solving Hunger. Empowering Women. Protecting the Future.</Highlight>
        <Description>
          At The Glory and Children Foundation, our work is rooted in compassion and action.
          Every program we run tackles core issues — starting with hunger — and builds a path
          toward dignity, sustainability, and self-reliance.
        </Description>

        <ProgramList>
          <ProgramItem>
            <Icon><FaUtensils /></Icon>
            <ProgramTitle>Feeding the Hungry 🍲</ProgramTitle>
            <ProgramText>
              We deliver meals and food supplies to malnourished children, struggling mothers, and low-income families — because no one deserves to go to bed hungry.
            </ProgramText>
          </ProgramItem>

          <ProgramItem>
            <Icon><FaChalkboardTeacher /></Icon>
            <ProgramTitle>Opening Doors Through Education 📘</ProgramTitle>
            <ProgramText>
              From school fees to books, we’re helping children stay in school and thrive — giving them the tools to build a better tomorrow.
            </ProgramText>
          </ProgramItem>

          <ProgramItem>
            <Icon><FaFemale /></Icon>
            <ProgramTitle>Empowering Women to Rise 👩🏽‍💼</ProgramTitle>
            <ProgramText>
              We train and support women with life skills, small business funding, and mentorship — helping them become confident providers and changemakers.
            </ProgramText>
          </ProgramItem>

          <ProgramItem>
            <Icon><FaLeaf /></Icon>
            <ProgramTitle>Creating a Sustainable Future 🌱</ProgramTitle>
            <ProgramText>
              Through environmental education, clean water access, and tree planting, we’re preserving our planet for generations to come.
            </ProgramText>
          </ProgramItem>
        </ProgramList>
      </Wrapper>
    </Section>
  );
};

export default Programs;
