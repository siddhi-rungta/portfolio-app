import React from "react";
import "../styles/portfoliostyle.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.facebook.com/siddhi.rungta.526/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/siddhs__/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/siddhi-rungta-281bb3253/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Siddhi Rungta. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
