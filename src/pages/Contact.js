import React from "react";
import "../portfoliostyle.css";

const Contact = () => {
  return (
    <div className="main-content">
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="india">India</option>
          <option value="nepal">Nepal</option>
          <option value="usa">USA</option>
        </select>
        <label htmlFor="subject">Message</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
