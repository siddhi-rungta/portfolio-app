import React from "react";
import { Link } from "react-router-dom";
import mainImage from "../images/main.jpg";
import "font-awesome/css/font-awesome.min.css";
import "../portfoliostyle.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="first" src={mainImage} alt="Main" />
      <nav>
        <ul>
          <li><Link to="/"><i className="fa fa-home" style={{ fontSize: "40px" }}></i></Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/interest">Interest</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
