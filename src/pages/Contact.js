import React from "react";
import "../styles/contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="main-content">
      <div className="contact-page">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Have a question or want to work together? Feel free to reach out!</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input 
              type="text" 
              id="fname" 
              name="firstname" 
              placeholder="Enter your first name"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input 
              type="text" 
              id="lname" 
              name="lastname" 
              placeholder="Enter your last name"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email address"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Message</label>
            <textarea 
              id="subject" 
              name="subject" 
              placeholder="Write your message here..."
              required 
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
