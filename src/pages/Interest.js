import React from "react";
import "../styles/interests.css";
import { Video, Paint, Travel, Read } from "../images/images";

const Interest = () => {
  const interests = [
    {
      title: "Video Editing",
      description: "Creating engaging visual content and storytelling through video.",
      image: Video
    },
    {
      title: "Painting",
      description: "Expressing creativity through colors and brushstrokes.",
      image: Paint
    },
    {
      title: "Traveling",
      description: "Exploring new places and experiencing different cultures.",
      image: Travel
    },
    {
      title: "Reading",
      description: "Expanding knowledge through books and continuous learning.",
      image: Read
    }
  ];

  return (
    <div className="main-content">
      <div className="interests-page">
        <div className="interests-header">
          <h1>My Interests</h1>
        </div>
        <div className="interest-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <img src={interest.image} alt={interest.title} />
              <div className="interest-content">
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interest;
