import React from "react";
import "../portfoliostyle.css";
import { Video, Paint, Travel, Read } from "../images/images";

const Interest = () => {
  return (
    <div className="main-content">
      <h2>My Interests</h2>
      <div className="interest-grid">
        <div className="interest-card"><img src={Video} alt="Video Editing" /><p>Video Editing</p></div>
        <div className="interest-card"><img src={Paint} alt="Painting" /><p>Painting</p></div>
        <div className="interest-card"><img src={Travel} alt="Traveling" /><p>Traveling</p></div>
        <div className="interest-card"><img src={Read} alt="Reading" /><p>Reading</p></div>
      </div>
    </div>
  );
};

export default Interest;
