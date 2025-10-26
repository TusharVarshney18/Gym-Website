import React from "react";
import "./about-header.css";

const AboutHeader = () => {
  return (
    <div>
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h2 className="about-gym-name">FRADEL GYM CENTER</h2>
          <h1 className="about-hero-title">UNLOCK YOUR STRENGTH</h1>
          <div className="about-cta-arrow"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeader;
