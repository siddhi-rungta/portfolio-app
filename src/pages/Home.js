import React from "react";
import "../portfoliostyle.css";
import { Nature } from "../images/images";

const Home = () => {
  return (
    <div className="main-content">
      <section>
        <h1>I'm Siddhi Rungta</h1>
        <p>Computer Science Engineer</p>
        <img src={Nature} alt="Nature" className="picture" />
      </section>
    </div>
  );
};

export default Home;
