import React from "react";
import "../CSS/Testimonial.css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <div className="cards" style={{ display: "flex" }}>
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </>
  );
};

export default Testimonials;
