import React from "react";
import "./videoSection.css";

const VideoSection = () => {
  const videos = [
    {
      title: "Strength Training",
      src: "https://videos.pexels.com/video-files/5319426/5319426-sd_360_640_25fps.mp4",
    },
    {
      title: "Full Body Workout",
      src: "https://videos.pexels.com/video-files/4943927/4943927-sd_506_960_24fps.mp4",
    },
    {
      title: "Cardio HIIT",
      src: "https://videos.pexels.com/video-files/4944394/4944394-uhd_1440_2732_24fps.mp4",
    },
    {
      title: "Core Workout",
      src: "https://videos.pexels.com/video-files/7674503/7674503-sd_506_960_25fps.mp4",
    },
  ];

  return (
    <section className="video-section">
      <h2 className="video-title">Workout Videos</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <video
              src={video.src}
              title={video.title}
              controls
              autoPlay
              className="video-player"
            ></video>
            <p className="video-caption">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
