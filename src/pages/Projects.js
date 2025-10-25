import React from "react";
import { Link } from "react-router-dom";
import "../styles/projects.css";
import projects from "../data/projectsData";

const Projects = () => {
  return (
    <div className="main-content">
      <div className="projects-page">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>A collection of my work, ranging from web development to software tools. Click on any project to explore details, code, and live demos.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <Link key={p.id} to={`/projects/${p.id}`} className="project-card">
              <img src={p.img} alt={p.title} />
              <div className="project-overlay">
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
