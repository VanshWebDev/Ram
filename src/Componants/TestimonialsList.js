import React, { useEffect } from "react";
import "../CSS/Testimonial.css";
import TestimonialCard from "./TestimonialCard";
const { testimonialRow1, testimonialRow2 } = require("./Data/Testimonial.js");

const Testimonials = () => {
  return (
    <>
      <div className="projects" data-aos="fade-up">
        <p>
          Test<span>i</span>mon<span>i</span>al
        </p>
      </div>
      <div className="slider">
        <div className="slide-track">
          {testimonialRow1.map((data, index) => {
            return (
              <div className="slide"  key={index}>
                <TestimonialCard data={data}/>
              </div>
            );
          })}
        </div>
        {/* -------------------------- */}
        <div
          className="slide-track"
          style={{ position: "relative", right: "100px" }}
        >
          {testimonialRow2.map((data, index) => {
            return (
              <div className="slide" key={index + testimonialRow1.length}>
                <TestimonialCard data={data} key={index} />
              </div>
            );
          })}
        </div>
      </div>
      {/* <button class="glow-on-hover" type="button">HOVER ME, THEN CLICK ME!</button> */}
    </>
  );
};

export default Testimonials;
