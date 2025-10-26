import React, { useEffect, useRef, useState } from "react";
import "./coursel.css";

const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  "https://media.istockphoto.com/id/1127359002/photo/young-sports-woman-with-ponytail-working-out-in-the-gym-running-on-treadmill-side-view.jpg?s=612x612&w=0&k=20&c=XwZKhsChxqqYkmQp6kvdOZz1ogAQXL1gqx-25KNC4_g=",
];

const Coursel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  const nextSlide = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goToSlide = (index) => setCurrentIndex(index);

  // Autoplay with pause on hover/focus and respects reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || mediaQuery.matches) return;

    autoplayRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [paused]);

  // Pause on hover/focus within the carousel
  useEffect(() => {
    const el = trackRef.current?.closest(".carousel");
    if (!el) return;
    const onEnter = () => setPaused(true);
    const onLeave = () => setPaused(false);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("focusout", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("focusout", onLeave);
    };
  }, []);

  // Move track with transform
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Gym gallery"
      data-paused={paused ? "true" : "false"}
    >
      <div className="carousel-wrapper">
        <button
          className="carousel-button prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        <div
          ref={trackRef}
          className="carousel-slides"
          role="group"
          aria-live="polite"
          aria-atomic="true"
          aria-relevant="additions text"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
              role="img"
              aria-label={`Slide ${index + 1} of ${images.length}`}
            >
              <img
                src={src}
                alt={`Workout scene ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-button next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>

        <button
          className="carousel-toggle"
          type="button"
          aria-pressed={paused}
          aria-label={paused ? "Play carousel" : "Pause carousel"}
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>

      <div
        className="carousel-indicators"
        role="tablist"
        aria-label="Choose slide"
      >
        {images.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentIndex}
            aria-current={index === currentIndex ? "true" : undefined}
            aria-label={`Go to slide ${index + 1}`}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Coursel;
