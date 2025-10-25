import React from "react";
import "../styles/internship.css";
import { Intern1, Intern2, Intern3 } from "../images/images";

const Internship = () => {
  const internships = [
    { img: Intern1, title: "First Day", desc: "Setup and onboarding" },
    { img: Intern2, title: "Onboarding", desc: "Team activities and icebreakers" },
    { img: Intern3, title: "Kaleidoscope Challenge", desc: "Team workshop and presentation" },
  ];

  return (
    <div className="main-content">
      <div className="internship-page">
        <div className="internship-header">
          <h1>Internship at NVIDIA</h1>
          <p>Currently working as a Tools Development Intern (Started July 14 — 6 months). A snapshot of onboarding and team activities.</p>
        </div>

        <div className="internship-grid">
          {internships.map((item, idx) => (
            <article key={idx} className="internship-card" aria-labelledby={`intern-${idx}`}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="internship-overlay">
                <h3 id={`intern-${idx}`}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;
