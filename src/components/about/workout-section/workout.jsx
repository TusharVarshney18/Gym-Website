import React from "react";
import "./workout.css";

const Workout = () => {
  return (
    <section className="workout-section">
      <div className="workout-overlay">
        <h2 className="workout-title">
          BODYWEIGHT <br /> EXERCISES
        </h2>

        <div className="exercise-tabs">
          <span className="tab neon">PUSH-UPS</span>
          <span className="tab">SQUATS</span>
          <span className="tab neon">LUNGES</span>
          <span className="tab">PLANKS</span>
        </div>

        <div className="workout-description">
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

        <div className="footer">
          <span className="gym-name">FRADEL GYM CENTER</span>
        </div>
      </div>
    </section>
  );
};

export default Workout;
