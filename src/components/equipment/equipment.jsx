import React from "react";
import { HeartPulse, Bike, Dumbbell } from "lucide-react";
import { TbYoga } from "react-icons/tb";

import "./equipment.css";

const amenities = [
  {
    icon: <HeartPulse size={40} className="icon red" />,
    title: "CARDIO ZONE",
    description:
      "To create a stunning presentation, it's best to simplify your thoughts. Start with an outline of topics and identify highlights, which can be applied to whatever subject you plan on discussing.",
  },
  {
    icon: <Bike size={40} className="icon yellow" />,
    title: "CYCLING STUDIO",
    description:
      "Share your product or service offerings here. Give your prospective clients an overview of why they should use it.",
  },
  {
    icon: <Dumbbell size={40} className="icon blue" />,
    title: "WEIGHTS ZONE",
    description:
      "Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.",
  },
  {
    icon: <TbYoga size={40} className="icon green" />,
    title: "CLASS STUDIO",
    description:
      "Share your product or service offerings here. Differentiate it from the others listed on this page.",
  },
];

const Equipment = () => {
  return (
    <div className="amenities-container">
      <h2 className="title">OUR AMENITIES</h2>
      <div className="amenities-grid">
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity-card">
            <div className="icon-wrapper">{amenity.icon}</div>
            <h3 className="amenity-title">{amenity.title}</h3>
            <p className="amenity-description">{amenity.description}</p>
            <button className="get-started">GET STARTED</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
