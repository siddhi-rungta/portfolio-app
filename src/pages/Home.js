import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import natureImage from "../images/nature.jpg";
import "../portfoliostyle.css";

function Home() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <header>
          <h1>I'm Siddhi Rungta.</h1>
          <p>Computer Science Engineer.</p>
          <img className="picture" src={natureImage} alt="Nature" />
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
