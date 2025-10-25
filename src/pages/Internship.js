import React from "react";
import "../portfoliostyle.css";
import { Intern1, Intern2, Intern3 } from "../images/images";

const Internship = () => {
  const internships = [
    { img: Intern1, title: "First Day", desc: "Setup and onboarding" },
    { img: Intern2, title: "Onboarding", desc: "Won the first game" },
    { img: Intern3, title: "Kaleidoscope Challenge", desc: "Ice Breaker" },
  ];

  return (
    <div className="main-content">
      <h2>Internship at NVIDIA</h2>
      <p>Currently working as a Tools Development Intern (Started July 14, 6 months)</p>
      <div className="internship-grid">
        {internships.map((item, idx) => (
          <div key={idx} className="internship-card">
            <img src={item.img} alt={item.title} />
            <div className="internship-overlay">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
