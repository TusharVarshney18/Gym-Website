import React from "react";
import Footer from "../../components/footer/footer";
import AboutHeader from "./about-header/about-header";
import Main from "./main/main";
import Workout from "./workout-section/workout";
import VideoSection from "./video-section/videoSection";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <Main />
      <Workout />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default About;
