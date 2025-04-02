import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anto Joseph </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            <br />
            I am currently pursuing MCA at AJCE Kanjirappally.
            <br />
            <br />
            I have completed BCA from MES College Nedumkandam.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing pictures
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "#FFBB00" }}>
            "Every mistake is a opportunity to learn something new!"{" "}
          </p>
          <footer className="blockquote-footer">An To</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
