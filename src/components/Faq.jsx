import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

// Styled Components
const FAQSection = styled.section`
  background: #f9f9f9;
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

const FAQContainer = styled.div`
  max-width: 800px;
  margin: auto;
`;

const QuestionBox = styled.div`
  background: white;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;
  text-align: left;
  color:#555;

  &:hover {
    background: rgba(0,0,255,0.5);
    color: white;
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;

  
`;

const Answer = styled.p`
  font-size: 16px;
//   color: #555;
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  padding: ${(props) => (props.isOpen ? "10px 0" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};

 
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is EZE MBIONWU FOUNDATION?",
      answer: "EZE MBIONWU FOUNDATION is a non-profit organization dedicated to community development and stability, providing aid in education, healthcare, and social services.",
    },
    {
      question: "How can I donate?",
      answer: "You can donate by visiting our Donations page, where you can contribute via bank transfer, or other payment options.",
    },
    {
      question: "Can I volunteer?",
      answer: "Yes! We welcome volunteers. Visit our Contact page to send us a message and be part of our mission to impact communities.",
    },
    {
      question: "Where does the NGO operate?",
      answer: "We operate primarily in underserved communities, providing essential services and relief programs to those in need.",
    },
    {
      question: "How can I contact you?",
      answer: "You can contact us via our Contact page.",
    },
  ];

  return (
    <FAQSection id="faq">
      <Title>Frequently Asked Questions ❓</Title>
      <Subtitle>
        Find answers to the most commonly asked questions about our foundation.
      </Subtitle>

      <FAQContainer>
        {faqItems.map((item, index) => (
          <QuestionBox key={index} onClick={() => toggleFAQ(index)}>
            <Question>
              {item.question}
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </Question>
            <Answer isOpen={openIndex === index}>{item.answer}</Answer>
          </QuestionBox>
        ))}
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;
