import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Homepage/Text";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm Sourav</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/ersouravbansal");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://in.linkedin.com/in/ersouravbansal/");
              }}
              className="socailmediabtn"
            >
              <AiFillLinkedin className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.youtube.com/@bugvalaengineer");
              }}
              className="socailmediabtn"
            >
              <AiFillYoutube className="icon" />
            </button>

            <button onClick={() => {
              window.open("https://instagram.com/sourabh744");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
