import React, { useState, useEffect } from "react";
import "./coursel.css"; // Import your CSS file for styling

const images = [
  "https://images.pexels.com/photos/8032959/pexels-photo-8032959.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6456209/pexels-photo-6456209.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7318664/pexels-photo-7318664.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3927388/pexels-photo-3927388.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Coursel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <button
          className="carousel-button prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <div className="carousel-slides">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button
          className="carousel-button next"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Coursel;
