import React from "react";
import "./header.css";

const Header = () => {
  const [isWideScreen, setIsWideScreen] = React.useState(
    window.innerWidth > 600
  );

  React.useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth > 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            IT'S TIME TO BE HEALTHY AND IN <span>GREAT SHAPE</span>
          </h1>
          <button className="sign-up-btn">SIGN UP NOW</button>
        </div>
        <div className="hero-image">
          <img
            src={
              isWideScreen
                ? "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600"
                : "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwYm95fGVufDB8fDB8fHww"
            }
            alt="Gym Workout"
          />
          <div className="info-bubble">
            We offer classes and personal training designed to help you get fit.
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
