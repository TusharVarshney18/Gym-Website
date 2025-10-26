import React, { useState } from "react";
import Intro from "./intro/intro";
import Footer from "../../components/footer/footer";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      <Intro />

      <div
        className="contact-form-container"
        role="form"
        aria-labelledby="contact-heading"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        <h2 id="contact-heading">Get in Touch</h2>
        <p>We'd love to hear from you! Please fill out the form below.</p>
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              aria-describedby="name_help"
              required
            />
            <label htmlFor="name">Name</label>
            <div id="name_help" className="helper-text">
              Please enter your full name.
            </div>
            {/* <div id="name_error" className="error-text" role="alert">Name is required.</div> */}
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              aria-describedby="email_help"
              required
            />
            <label htmlFor="email">Email</label>
            <div id="email_help" className="helper-text">
              We never share your email.
            </div>
            {/* <div id="email_error" className="error-text" role="alert" aria-live="polite">Enter a valid email.</div> */}
          </div>

          <div className="form-group full">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              aria-describedby="message_help"
              required
            />
            <label htmlFor="message">Message</label>
            <div id="message_help" className="helper-text">
              What can we help you with?
            </div>
          </div>

          <div className="form-actions">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
