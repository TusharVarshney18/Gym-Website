import React from "react";
import "./gallary.css";

const Gallary = () => {
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
      <div className="gallary-section">
        <div className="gallary-image">
          <img
            className="gallary-img"
            src={
              isWideScreen
                ? "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBsaWZ0aW5nfGVufDB8fDB8fHww"
                : "https://images.unsplash.com/photo-1546817372-628669db4655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxlZEM1SGgtZTNNWXx8ZW58MHx8fHx8"
            }
            alt="gallery-image"
          />
        </div>

        <div className="gallary-text">
          <h1>
            Muscle Major Gym is on a mission to help you achieve your fitness
            goals and live a healthy lifestyle
          </h1>
          <button className="Learnmore-btn">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Gallary;
