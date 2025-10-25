import React from "react";
import "../portfoliostyle.css";
import { Code, Intern1 } from "../images/images";

const About = () => {
  return (
    <div className="main-content">
      <section className="about-section">
        <div className="about-left">
          <img src={Intern1} alt="Internship" className="about-picture" />
          <img src={Code} alt="Code" className="about-picture about-picture-gap" />
        </div>
        <div className="about-right">
          <h1>About Me</h1>
          <p>
            Hello! I'm Siddhi Rungta, currently a <strong>4th-year Computer Science Engineering student</strong>.
            My journey in tech started in Grade 11 when I chose Computer Science. I am passionate about web development, design, and creating
            engaging digital experiences.
          </p>
          <p>
            I am currently pursuing a <strong>6-month internship at NVIDIA</strong> as a Tools Development Intern starting from
            <strong> July 14</strong>. During this internship, I am gaining hands-on experience in developing efficient tools and improving
            software workflows.
          </p>

          <div className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-container">
              <div className="skill-card">
                <div className="skill-name">Web Development</div>
                <div className="skill-bar-background">
                  <div className="skill-bar-fill" style={{ width: "40%" }}>40%</div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-name">Video Editing</div>
                <div className="skill-bar-background">
                  <div className="skill-bar-fill" style={{ width: "50%" }}>50%</div>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-name">Painting</div>
                <div className="skill-bar-background">
                  <div className="skill-bar-fill" style={{ width: "65%" }}>65%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
