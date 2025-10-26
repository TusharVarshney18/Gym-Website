import React from "react";
import "./intro.css";
import { FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="gym-container" aria-label="Astraeus Fitness hero">
      <header className="gym-header">
        <h1>
          ASTRAEUS
          <br />
          FITNESS GYM
        </h1>

        <nav className="social-icons" aria-label="Social links">
          <a href="#" aria-label="Email Astraeus Fitness">
            <FaEnvelope aria-hidden="true" focusable="false" />
          </a>
          <a href="#" aria-label="Astraeus on Facebook">
            <FaFacebook aria-hidden="true" focusable="false" />
          </a>
          <a href="#" aria-label="Astraeus on YouTube">
            <FaYoutube aria-hidden="true" focusable="false" />
          </a>
        </nav>
      </header>

      <div className="gym-content">
        <div className="images">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Athlete lifting barbell"
            loading="lazy"
          />
          <img
            src="https://images.pexels.com/photos/6456209/pexels-photo-6456209.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Coach assisting client"
            loading="lazy"
          />
        </div>

        <aside className="sidebar" aria-label="Quick links">
          <div className="sidebar-box">
            <h3>WHAT WE DO</h3>
            <p>Our effective and holistic approach to fitness.</p>
          </div>
          <div className="sidebar-box">
            <h3>OUR TEAM</h3>
            <p>Get to know our professional coaches.</p>
          </div>
          <div className="sidebar-box">
            <h3>SERVICES</h3>
            <p>Different ways to kickstart your fitness journey.</p>
          </div>
          <div className="sidebar-box">
            <h3>BOOK A MEETING</h3>
            <p>Let us help you create a sustainable fitness plan.</p>
          </div>
          <div className="sidebar-box">
            <h3>BLOG</h3>
            <p>Read community stories and wellness articles.</p>
          </div>
          <div className="sidebar-box">
            <h3>CONTACT US</h3>
            <p>Get in touch for inquiries and other concerns.</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Intro;
