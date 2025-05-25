import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bilal Hamdi </span>
            from <span className="purple"> Temara, Morocco.</span>
            <br />
            I am currently employed as a software developer (Front End | React Native | React).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by purpose, crafted with code - I build mobile experiences that connect people to what matters."{" "}
          </p>
          <footer className="blockquote-footer">Bilal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
