import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Profile from "../assets/image/profile.png";
import "./About.css"; 

const About = () => {

  return (
    <div id="about" className={`about`}>
      <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
      <Container>
        <Row className="pb-5 align-items-center">
          <Col xs={12} md={6}>
            <Row className="justify-content-center mb-2">
              <Image className="profile" alt="profile" src={Profile} fluid />
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row className="align-items-start p-2 my-details rounded text-left">
              <p>
                I am a fullstack web developer. I am pursuing graduation from
                Swami Vivekananda Institute Of Modern Science with a degree in
                Bachelor of Computer Application. I developed an interest in
                Web Development and started learning through online resources.
                To further enhance my skills and build real-world projects, I
                worked as a trainee at Almabetter. As a result, I have gained
                expertise in front-end technologies like HTML, CSS,
                JavaScript, React as well as back-end technologies like
                Node.js and MongoDB. I'm always keen to learn and implement
                new technologies to create efficient and elegant web solutions
              </p>
              <Col className="d-flex justify-content-center flex-wrap">
                <div>
                  <a
                    href="https://github.com/IM-Partha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-dark">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/partha-debnath-9630a7190/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
