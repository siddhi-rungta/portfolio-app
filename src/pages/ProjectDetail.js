import React from "react";
import { useParams, Link } from "react-router-dom";
import "../portfoliostyle.css";
import projects from "../data/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="main-content">
        <h2>Project not found</h2>
        <p>Sorry, that project doesn't exist (yet).</p>
        <Link to="/projects">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="main-content">
      <h2>{project.title}</h2>
      <div className="project-detail">
        <div>
          <img src={project.img} alt={project.title} className="project-detail-image" />
          {project.img2 && (
            <div className="project-gallery">
              <img src={project.img2} alt={`${project.title} - 2`} className="project-detail-image-small" />
            </div>
          )}
        </div>

        <div className="project-detail-meta">
          <p>{project.details}</p>
          <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
          {project.repo && (
            <p>
              <a href={project.repo} target="_blank" rel="noreferrer">Source Code</a>
            </p>
          )}
          {project.demo && (
            <p>
              <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </p>
          )}
          <p><Link to="/projects">← Back to projects</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
