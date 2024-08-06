import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Techskill.css'
import Skilldb from "../compo/Skilldb"; //import from skill.js 

const Techskill = () => {
    return (
        <div className="pt-3 p-4 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
            <Row>
                <Col md={6} lg={3} className="mb-4">
                    <Card className="focus">
                        <Card.Body>
                            <Card.Title className="text-center card-title">Version Control</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {Skilldb.versionControl.map((skill, index) => (
                                    <span key={index}>
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                        {skill.skillName}
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="focus">
                        <Card.Body>
                            <Card.Title className="text-center card-title">Databases</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {Skilldb.databases.length ? (
                                    Skilldb.databases.map((skill, index) => (
                                        <span key={index}>
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                            {skill.skillName}
                                        </span>
                                    ))
                                ) : (
                                    <span> </span>
                                )}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="focus">
                        <Card.Body>
                            <Card.Title className="text-center card-title">Frameworks</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {Skilldb.frameworks.map((skill, index) => (
                                    <span key={index}>
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                        {skill.skillName}
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="focus">
                        <Card.Body>
                            <Card.Title className="text-center card-title">Frontend Technologies</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {Skilldb.frontend.map((skill, index) => (
                                    <span key={index}>
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                                        {skill.skillName}
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Techskill;
