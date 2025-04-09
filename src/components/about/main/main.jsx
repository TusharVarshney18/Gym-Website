import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div>
      <section className="about-section">
        <div className="about-section-content">
          <h2 className="about-section-title">INTRODUCTION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="about-section-image">
          <img
            src="https://images.pexels.com/photos/6740040/pexels-photo-6740040.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Gym Workout"
          />
        </div>
        <div className="about-section-footer">
          <span className="gym-center-name">FRADEL GYM CENTER</span>
        </div>
      </section>
    </div>
  );
};

export default Main;
