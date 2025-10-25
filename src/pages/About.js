import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../portfoliostyle.css";

function About() {
  return (
    <div>
      <Sidebar />
      <div className="title">
        <br /><br /><br />
        <h1>About Me</h1>
        <hr style={{ width: "200px", color: "black" }} align="left" />
      </div>

      <div className="intro">
        <p style={{ fontSize: "large" }}>
          🎂 <span style={{ fontSize: "15px" }}>05/06/2005</span><br/>
          I'm Siddhi Rungta, a passionate 2nd-year Computer Science Engineering student at Jain Deemed-to-be University. 
          My journey in the world of technology began in 2020 when I was in grade 11 by choosing computer science as my subject, and since then, I've been exploring the vast and exciting 
          realm of computer science. I am currently in my 4th semester pursuing a Bachelor's degree in Computer Science and Engineering.
          Growing up, my fascination with computers led me to discover my love for creating and designing. I have always been drawn to 
          the endless possibilities that computer science offers in terms of creativity. Currently, I am diving into the dynamic world of web development. 
          I am honing my skills in creating responsive and visually appealing websites.
        </p>
      </div>

      <div className="title">
        <h2>My Skills</h2>
      </div>

      <div className="container intro">
        <p>Web Development</p>
        <div className="container"><div className="skills web">40%</div></div>

        <p>Video Editing</p>
        <div className="container"><div className="skills video">50%</div></div>

        <p>Painting</p>
        <div className="container"><div className="skills paint">65%</div></div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
