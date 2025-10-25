import React from "react";
import { Link } from "react-router-dom";
import "../portfoliostyle.css";
import projects from "../data/projectsData";

const Projects = () => {
  return (
    <div className="main-content">
      <h2>Projects</h2>
      <p>Click a project to see details, code and demo links.</p>

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
  );
};

export default Projects;
