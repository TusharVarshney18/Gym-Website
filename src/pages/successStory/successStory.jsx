import React from "react";
import "./successStory.css";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1584952449254-80c846de339d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwYm95fGVufDB8fDB8fHww",
    text: "Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable.",
    highlight: "product",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583500178689-665d1f77e67d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable.",
    highlight: "testimonials from your clients",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584952449180-f8fddc0b03a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable.",
    highlight: "service’s credibility",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583500178753-464599364366?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable.",
    highlight: "recommendations",
  },
];

const SuccessStory = () => {
  return (
    <div>
      <div className="success-stories-container">
        <h2 className="success-title">SUCCESS STORIES</h2>
        <div className="success-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt="Testimonial"
                className="testimonial-image"
              />
              <p className="testimonial-text">
                "Boost your{" "}
                <span className="highlight">{testimonial.highlight}</span> and
                service’s credibility by adding testimonials from your clients.
                People love recommendations so feedback from others who’ve tried
                it is invaluable."
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
