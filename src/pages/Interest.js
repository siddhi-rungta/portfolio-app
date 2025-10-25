import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import videoImg from "../images/video.jpeg";
import paintImg from "../images/paint.jpeg";
import travelImg from "../images/travel.jpg";
import readImg from "../images/read.jpg";
import "../portfoliostyle.css";

function Interest() {
  return (
    <div>
      <Sidebar />
      <div className="title">
        <br /><br /><br />
        <h2>INTERESTS</h2>
      </div>

      <div className="container intro">
        <p>Video Editing</p>
        <img className="picture1" src={videoImg} alt="Video Editing" />

        <p>Painting</p>
        <img className="picture1" src={paintImg} alt="Painting" />

        <p>Travelling</p>
        <img className="picture1" src={travelImg} alt="Travelling" />

        <p>Reading</p>
        <img className="picture1" src={readImg} alt="Reading" />
      </div>

      <Footer />
    </div>
  );
}

export default Interest;
