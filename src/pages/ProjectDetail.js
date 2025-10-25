import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/project-detail.css";
import projects from "../data/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  // ensure type-safe comparison: project ids may be numbers or strings
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="main-content project-detail-page">
        <div className="detail-header">
          <h2>Project not found</h2>
          <p>Sorry, that project doesn't exist (yet).</p>
          <Link to="/projects" className="btn btn-secondary">Back to projects</Link>
        </div>
      </div>
    );
  }

  const techList = Array.isArray(project.tech) ? project.tech : [];

  return (
    <div className="main-content project-detail-page">
      <div className="detail-header">
        <h1>{project.title}</h1>
        {project.subtitle && <p className="subtitle">{project.subtitle}</p>}
      </div>

      <div className="project-detail">
        <div className="project-media">
          {project.img ? (
            <img src={project.img} alt={project.title || 'Project image'} className="project-detail-image" loading="lazy" />
          ) : (
            <div className="image-placeholder">No image available</div>
          )}

          {/* optional gallery or secondary image(s) */}
          {Array.isArray(project.gallery) && project.gallery.length > 0 && (
            <div className="project-gallery">
              {project.gallery.map((g, i) => (
                <img key={i} src={g} alt={`${project.title} ${i + 1}`} className="project-detail-image-small" loading="lazy" />
              ))}
            </div>
          )}

          {!Array.isArray(project.gallery) && project.img2 && (
            <div className="project-gallery">
              <img src={project.img2} alt={`${project.title} - 2`} className="project-detail-image-small" loading="lazy" />
            </div>
          )}
        </div>

        <aside className="project-detail-meta">
          {project.details ? <p className="project-details">{project.details}</p> : <p>No details available.</p>}

          {techList.length > 0 && (
            <div className="tech-list">
              <strong>Tech:</strong>
              <ul>
                {techList.map((t, idx) => (
                  <li key={idx} className="tech-chip">{t}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-links">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" aria-label={`Open ${project.title} source code`}>Source Code</a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label={`Open ${project.title} live demo`}>Live Demo</a>
            )}
          </div>

          <div className="back-link">
            <Link to="/projects">← Back to projects</Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetail;
