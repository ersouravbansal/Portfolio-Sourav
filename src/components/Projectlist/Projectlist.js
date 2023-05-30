import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import useradminpanel from "../../Assets/Admin-Panel-Dashboard.png";
import olximage from "../../Assets/olx-clone image.png";
import netfliximage from "../../Assets/React-App-netflix-clone.png";
import gridlinesbuilders from "../../Assets/Gridlinesbuilders.png";
import charlespizza from "../../Assets/Charlestown-Pizza.png";
import todolist from "../../Assets/todolist.png";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row className="d-flex" style={{ justifyContent: "center" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                title="NDTV BEEPS"
                description="Revamped the Beeps platform by implementing the RemixJs framework. I developed video players using ReactJs and created proxy servers to ensure secure data fetching. Additionally, I integrated Google IMA SDK ads, including PreRoll, MidRoll, and PostRoll ads, as well as GPT.js ads efficiently. To enhance user experience, I implemented infinite scrolling functionality and utilized the Intersection Observer API and Swiper.js library. Furthermore, I successfully applied Google Analytics to track various user interactions with videos. Lastly, I incorporated a social sharing feature, enabling users to share content on different social media platforms."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Wpcarey"
                description="Enhanced the 'WPCAREY' website by developing a custom Drupal theme called 'wpc_bootstrap_barrio' based on the Bootstrap Barrio theme. This involved customizing the design and layout to meet the client's branding and requirements. Additionally, I implemented interactive blog layouts using ReactJS components. By leveraging ReactJS, I created dynamic and engaging blog sections, improving the user experience and making the website more interactive. My contributions to the project included the development of a customized Drupal theme and the integration of ReactJS components for an enhanced and interactive blog layout."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Learning Without Tears"
                description="Migrated content from Drupal 7 to Drupal 9 for the 'Learning Without Tears' website. Additionally, I developed a custom Contact Form module and integrated the Agile Lookup API to fetch schools based on zip codes. I enhanced the website's functionality by integrating third-party APIs, including Google Tag Manager, Google Analytics, Salesforce, and Swiftype. I also implemented Acquia Personalization and Cohesion to improve user experience and provide personalized content. Furthermore, I set up configuration synchronization for different environments (Development, Stage, and Production) to ensure consistency and ease of management. This project showcased my expertise in Drupal migration, custom module development, API integration, and configuration management in various environments."
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Sample Project}
                isBlog={false}
                title="Sample Project"
                ghLink="https://github.com/ersouravbansal"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
