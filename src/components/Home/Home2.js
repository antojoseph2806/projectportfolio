import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ajm.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
            I am a postgraduate student currently pursuing a Master of Computer Applications (MCA) at
            <i>
                <b className="purple"> Amal Jyothi College of Engineering (Autonomous), Kanjirappally.</b>
              </i> 
              <br />
              <br />I possess proficiency in several programming languages, including <i>
                <b className="purple">C, C++,Php,Python,React,Etc.. </b>
                <b className="purple"> </b>
              </i>
              <br />
              <br />My primary areas of interest lie in developing<i>
                <b className="purple">developing innovative web technologies. </b>
                <b className="purple"> </b>
                </i>
              <br />
              <br/>
              I am actively seeking opportunities that will allow me to further enhance my technical skills and contribute meaningfully to the growth of the organization, while advancing in my <i>
                <b className="purple">
                  {" "}
                  professional career.
                </b>
                </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img 
  src={myImg} 
  className="img-fluid rounded-box" 
  alt="avatar" 
/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/antojoseph2806"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/antojoseph2806"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/antojoseph2806/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_an__to___"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
