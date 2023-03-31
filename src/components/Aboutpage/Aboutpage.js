import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
                As an Indian Software Developer, I specialize in Web
                Development, ReactJs, RemixJs, and IMA SDK integration. I am
                experienced in E-commerce, third-party integrations, Drupal
                development, and Agile methodologies.<br /> My skills range from
                Site-Building, Back-End Development, Front-End Development, to
                REST API Integrations, and my work always exceeds expectations.
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={5}>
                  <li>React Js / Remix Js</li>
                  <li>Video Players</li>
                  <li>TypeScript/JavaScript</li>
                  <li>MySQL / MongoDB</li>
                  <li>Acquia Personalization</li>
                  <li>GTM / Google Analytics</li>
                </Col>

                <Col md={3}>
                  <li>Drupal / PHP</li>
                  <li>Python</li>
                  <li>REST API's</li>
                  <li>JQuery</li>
                  <li>JIRA</li>
                  <li>Acquia BLT</li>
                </Col>
                <Col md={4}>
                  <li>Acquia Cloud </li>
                  <li>Acquia Cohesion</li>
                  <li>Postman / GIT</li>
                  <li> Ads Integrations </li>
                  <li>Lando / Docker</li>
                  <li>HTML / CSS</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
