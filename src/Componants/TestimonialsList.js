import React from "react";
import "../CSS/Testimonial.css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <div className="projects" data-aos="fade-up">
        <p>
          Test<span>i</span>mon<span>i</span>al
        </p>
      </div>
      <div className="cards" style={{ display: "flex" }}>
        <div className="slider">
          <div className="slide-track">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>

        {/* <div class="slider slider2">
          <div class="slide-track2">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Testimonials;
