import React from "react";
import Typewriter from "typewriter-effect"; ///install typewriter-effect by npm
import styled from "styled-components"; ///install styled-components by npm

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 50px; /* Center vertically */
  left: 50%;
  transform: translate(-50%, -50%); /* Center horizontally and vertically */
  z-index: 2;
  text-align: center;
  color: #ecf611;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  font-weight: 200;

  .main {
    font-size: 5.5vw; /* Responsive font size */
  }

  .sub {
    font-size: 2vw; /* Responsive font size */
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    .main {
      font-size: 7vw; /* Adjust for tablets */
    }

    .sub {
      font-size: 3vw; /* Adjust for tablets */
    }
  }

  @media (max-width: 576px) {
    .main {
      font-size: 10vw; /* Adjust for mobile */
    }

    .sub {
      font-size: 4vw; /* Adjust for mobile */
    }
  }
`;

const Titlemessage = () => {
  return (
        /// Message on Carousel

    <MyTitleMessage>
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Partha👋</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter ///Typewriter libary
            options={{
              strings: ["MERN Developer"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default Titlemessage;
