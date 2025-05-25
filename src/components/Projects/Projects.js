import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eshop1 from "../../Assets/eshop1.jpg";
import eshop2 from "../../Assets/eshop2.jpg";
import eshop3 from "../../Assets/eshop3.jpg";
import eshop4 from "../../Assets/eshop4.jpg";
import eshop5 from "../../Assets/eshop1.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Worked on 50+ private (for a the company) e-commerce applications with complete
ecosystems: client apps, delivery man apps, and admin dashboards using React Native, Reactjs and Nextjs.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ProjectCard 
              imgPath={eshop1}
              imgsPath={[eshop1,eshop2,eshop3,eshop4,eshop5]}
              isBlog={false}
              title="E-Shop"
              description="Bilal Shop & Service – Mobile E-Commerce App

This mobile application was developed during my internship and is designed to support a modern audio retail business located on Agdal Avenue 57. The app provides a complete shopping experience for users, offering both products and services related to audio equipment.

Key Features:

Clean and user-friendly interface with bilingual support (English/Arabic).

Product listings with discounts, availability indicators, and category separation (e.g., headphones, accessories).

Wishlist and cart functionalities.

Real-time price updates and responsive design for all devices.


This project helped me enhance my skills in React Native, UI/UX design, and mobile e-commerce app development, while also learning how to collaborate with real-world business requirements."
ghLink="https://github.com/bilal-prog/e_shop"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
