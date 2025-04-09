import React, { useState, useEffect } from "react";
import Intro from "./intro/intro";
import Footer from "../../pages/footer/footer";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showAd, setShowAd] = useState(false);
  let adTimeout = null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleAdInteraction = () => {
    if (adTimeout) clearTimeout(adTimeout);
    adTimeout = setTimeout(() => {
      setShowAd(false);
    }, 5000); // Close ad 5 seconds after interaction
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 3000); // Show ad after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showAd) {
      const timer = setTimeout(() => {
        setShowAd(false);
      }, 10000); // Auto-close ad after 10 seconds
      return () => clearTimeout(timer);
    }
  }, [showAd]);

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
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>

        {/* Advertisement Carousel */}
        <div
          className={`advertisement-carousel ${showAd ? "show" : ""}`}
          onMouseEnter={handleAdInteraction}
          onTouchStart={handleAdInteraction}
        >
          <h3>Check Out Our Products</h3>
          <div className="carousel">
            <div className="carousel-item">
              <img
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
                alt="Supplements"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p>Supplements</p>
            </div>
            <div className="carousel-item">
              <img
                src="https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif"
                alt="Protein"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p>Protein</p>
            </div>
            <div className="carousel-item">
              <img
                src="https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif"
                alt="Equipment"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p>Equipment</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
