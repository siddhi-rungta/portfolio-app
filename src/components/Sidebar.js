import React, { useState } from "react";
import "../portfoliostyle.css";
import { FaHome, FaUser, FaHeart, FaBriefcase, FaEnvelope, FaBars, FaFolderOpen } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <img className="first" src={require("../images/main.jpg")} alt="Profile" />
        <nav>
          <ul>
            <li><a href="/"><FaHome /> Home</a></li>
            <li><a href="/about"><FaUser /> About</a></li>
            <li><a href="/interest"><FaHeart /> Interest</a></li>
            <li><a href="/projects"><FaFolderOpen /> Projects</a></li>
            <li><a href="/internship"><FaBriefcase /> Internship</a></li>
            <li><a href="/contact"><FaEnvelope /> Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Overlay */}
      {open && <div className="overlay show" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
