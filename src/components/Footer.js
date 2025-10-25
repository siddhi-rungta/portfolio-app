import React from "react";
import "../portfoliostyle.css";

function Footer() {
  return (
    <div className="container intro" style={{ backgroundColor: "#f2f2f2" }}>
      <center>
        <div className="footer">
          <a href="https://www.facebook.com/siddhi.rungta.526/"><i className="fa fa-facebook-official" style={{ fontSize: "30px" }}></i></a>
          <a href="https://www.instagram.com/siddhs__/"><i className="fa fa-instagram" style={{ fontSize: "30px" }}></i></a>
          <a href="https://www.linkedin.com/in/siddhi-rungta-281bb3253/"><i className="fa fa-linkedin" style={{ fontSize: "30px" }}></i></a>
        </div>
      </center>
    </div>
  );
}

export default Footer;
