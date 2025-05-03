// import React, { useState } from "react";
// import styled from "styled-components";
// import sampleImage from "../Images/caccert.jpeg"; // Replace with your image path

// const CacCert = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClose = () => {
//     setIsVisible(false); // Hide the image when clicking outside
//   };

//   return (
//     isVisible && (
//       <Overlay>
//         <ImageWrapper>
//           <Image src={sampleImage} alt="Centered" />
//         </ImageWrapper>
//         <button>Close</button>
//       </Overlay>
//     )
//   );
// };

// export default CacCert;

// // Styled Components
// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.6); /* Transparent dark background */
//   display: flex;
//   flex-direction:column;
//   gap:50px;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// //   padding-top:50px;
// //   padding-bottom:50px;
// //   overflow-y:scroll;
// `;

// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 600px;
// //   max-width: 600px;
//   height:600px;
// //   overflow-y:scroll;
//   `;

// const Image = styled.img`
// // margin-top:200px;
// // margin-bottom:100px;
//   width: 100%;
//   height: 100%;
// //   max-height: 80vh;
//   border-radius: 10px; /* Optional: rounded corners */
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Soft shadow */
// `;




import React, { useState } from "react";
import styled from "styled-components";
import sampleImage from "../Images2/caccert.jpeg"; // Replace with your image path

const CacCert = ({isVisible, setIsVisible}) => {
  

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <Overlay onClick={handleClose}>
        <Modal>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          <Image src={sampleImage} alt="CAC Certificate" />
        </Modal>
      </Overlay>
    )
  );
};

export default CacCert;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  position: relative;
  background: white;
//   padding: 15px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  max-height: 100%;
  animation: fadeIn 0.3s ease-in-out;
//   overflow-y:scroll;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;

`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: darkred;
  }
`;
