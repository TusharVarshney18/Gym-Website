import React from "react";
import "./classStudio.css";

const ClassStudio = ({ isWideScreen }) => {
  return (
    <div className="class-studio-container">
      <div className="class-studio-content">
        <h2 className="class-studio-title">CLASS STUDIO</h2>
        <p className="class-studio-description">
          Use this space to highlight your most popular services. You can also
          use this for your flagship products.
        </p>
        <button className="class-studio-button">TRY OUR CLASSES</button>
      </div>
      <div className="class-studio-media">
        <video className="class-studio-video" controls>
          <source
            src={
              isWideScreen
                ? "https://cdn.pixabay.com/video/2023/01/27/148208-793717949_tiny.mp4"
                : "https://cdn.pixabay.com/video/2023/01/27/148201-793717934_tiny.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ClassStudio;
