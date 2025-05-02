// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import bg from "../Images/4146.jpg"


// // Styled Components
// const PageWrapper = styled.div`
//   font-family: Arial, sans-serif;
//   background: #f9f9f9;
// `;

// // Hero Section
// const HeroSection = styled.div`
//   background: url(${bg}) center/cover no-repeat;    
//   color: white;
//   text-align: center;
//   padding: 150px 20px;

//   @media(max-width:768px){
//     padding-top:200px;
//   }
// `;

// const HeroTitle = styled.h1`
//   font-size: 42px;
//   font-weight: bold;
//   text-transform: uppercase;
// `;

// const HeroSubtitle = styled.p`
//   font-size: 18px;
//   margin-top: 10px;
// `;

// // Contact Info Section
// const ContactInfoSection = styled.div`
//   padding: 60px 20px;
//   text-align: center;
// `;

// const ContactContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 40px;
//   max-width: 1000px;
//   margin: auto;
// `;

// const ContactCard = styled.div`
//   width: 300px;
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
//   text-align: center;
//   transition: 0.3s;

//   &:hover {
//     background: rgba(0,0,255,0.5);
//     color: white;
//   }
// `;

// const Icon = styled.div`
//   font-size: 30px;
//   margin-bottom: 15px;
//   color: rgba(0,0,255,0.5);
//   transition: 0.3s;

//   ${ContactCard}:hover & {
//     color: white;
//   }
// `;

// const Info = styled.p`
//   font-size: 16px;
//   color: #555;
//   transition: 0.3s;

//   ${ContactCard}:hover & {
//     color: white;
//   }
// `;

// // Contact Form Section
// const FormSection = styled.div`
//   background: #fff;
//   padding: 60px 20px;
// `;

// const FormContainer = styled.div`
//   max-width: 600px;
//   margin: auto;
//   background: #f4f4f4;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
// `;

// const FormTitle = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   color: rgba(0,0,255,0.5);
// `;

// const FormInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
// `;

// const FormTextArea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   height: 120px;
// `;

// const SubmitButton = styled.button`
//   background: rgba(0,0,255,0.5);
//   color: white;
//   padding: 10px 20px;
//   font-size: 16px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: 0.3s;
//   width: 100%;

//   &:hover {
//     background: rgba(0,0,255,0.7);
//   }
// `;

// // Social Media Section
// const SocialSection = styled.div`
//   text-align: center;
//   padding: 40px 20px;
//   background: rgba(0,0,255,0.5);
//   color: white;
// `;

// const SocialIcons = styled.div`
//   font-size: 30px;
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-top: 20px;
// `;

// const SocialIcon = styled.a`
//   color: white;
//   transition: 0.3s;

//   &:hover {
//     color: #222;
//   }
// `;

// // Contact Page Component
// const ContactUs = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for reaching out! We will contact you soon.");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <PageWrapper>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroTitle>Contact Us</HeroTitle>
//         <HeroSubtitle>We’d love to hear from you! Reach out anytime.</HeroSubtitle>
//       </HeroSection>

//       {/* Contact Info Section */}
//       <ContactInfoSection>
//         <ContactContainer>
//           <ContactCard>
//             <Icon><FaMapMarkerAlt /></Icon>
//             <Info>Eze’s Place Umoubom Ideoto-south LGA, Imo state</Info><br/>
//             <Info>Plot 10, Oliver Tambo Street, Asokoro, FCT Abuja.</Info>
//           </ContactCard>

//           <ContactCard>
//             <Icon><FaPhoneAlt /></Icon>
//             <Info>+234 803 500 5839</Info>
//           </ContactCard>

//           <ContactCard>
//             <Icon><FaEnvelope /></Icon>
//             <Info>info@ezembionwufoundation.org</Info>
//           </ContactCard>
//         </ContactContainer>
//       </ContactInfoSection>

//       {/* Contact Form Section */}
//       <FormSection>
//         <FormContainer>
//           <FormTitle>Send Us a Message</FormTitle>
//           <form onSubmit={handleSubmit}>
//             <FormInput type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//             <FormInput type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
//             <FormTextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
//             <SubmitButton type="submit">Send Message</SubmitButton>
//           </form>
//         </FormContainer>
//       </FormSection>

//       {/* Social Media Section */}
//       <SocialSection>
//         <h2>Follow Us</h2>
//         <SocialIcons>
//           <SocialIcon href="#" target="_blank"><FaFacebook /></SocialIcon>
//           <SocialIcon href="#" target="_blank"><FaTwitter /></SocialIcon>
//           <SocialIcon href="#" target="_blank"><FaInstagram /></SocialIcon>
//           <SocialIcon href="#" target="_blank"><FaLinkedin /></SocialIcon>
//         </SocialIcons>
//       </SocialSection>
//     </PageWrapper>
//   );
// };

// export default ContactUs;



import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import bg from "../Images/4146.jpg";

// Styled Components
const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  background: #f9f9f9;
`;

// Hero Section
const HeroSection = styled.div`
  background: url(${bg}) center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 150px 20px;

  @media(max-width:768px){
    padding-top: 200px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

// Contact Form Section
const FormSection = styled.div`
  background: #fff;
  padding: 60px 20px;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: auto;
  background: #f4f4f4;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: rgba(0,0,255,0.5);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 120px;
`;

const SubmitButton = styled.button`
  background: rgba(0,0,255,0.5);
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;

  &:hover {
    background: rgba(0,0,255,0.7);
  }
`;

// Contact Page Component
const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading alert
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we process your message.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // API request to send message
    try {
      const response = await fetch("https://www.ezembionwufoundation.org/api/contact_form_endpoint.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We have received your message and will get back to you shortly.",
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: result.error || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error!",
        text: "Failed to connect to the server. Please check your internet connection and try again.",
      });
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>Contact Us</HeroTitle>
        <HeroSubtitle>We’d love to hear from you! Reach out anytime.</HeroSubtitle>
      </HeroSection>

      {/* Contact Form Section */}
      <FormSection>
        <FormContainer>
          <FormTitle>Send Us a Message</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormInput type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <FormInput type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <FormInput type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
            <FormTextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        </FormContainer>
      </FormSection>
    </PageWrapper>
  );
};

export default ContactUs;
