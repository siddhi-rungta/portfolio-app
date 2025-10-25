import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../portfoliostyle.css";

function Contact() {
  return (
    <div>
      <Sidebar />
      <div className="title">
        <br /><br /><br />
        <h2>CONTACT</h2>
      </div>

      <div className="container intro">
        <form>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="india">INDIA</option>
            <option value="nepal">NEPAL</option>
            <option value="usa">USA</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
