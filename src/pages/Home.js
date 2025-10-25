import React from "react";
import "../styles/portfoliostyle.css";
import { front } from "../images/images";

const Home = () => {
  return (
    <div className="main-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Siddhi Rungta</h1>
          <h2>Computer Science Engineer</h2>
          <p>
            Passionate about software development and building innovative solutions
          </p>
        </div>
      </div>
      <div className="featured-work">
        <div className="work-grid">
          <img src={front} alt="Portfolio" className="featured-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
