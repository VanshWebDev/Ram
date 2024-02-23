import React, { useEffect } from "react";
import "../CSS/Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import gsap from "gsap";

const Testimonials = () => {
  useEffect(() => {
    const colors = ["#00000000", "#000000000", "#00000000", "#00000000"];
    const wrap = gsap.utils.wrap(-200, 800);

    gsap.set(".box", {
      backgroundColor: (i) => colors[i % colors.length],
      y: (i) => i * 200,
    });

    const timeline = gsap.to(".box", {
      duration: 10,
      ease: "none",
      y: "-=800", //move each box 500px to right
      modifiers: {
        y: gsap.utils.unitize(wrap), //force y value to wrap when it reaches -100
      },
      repeat: -1,
    });

    // Cleanup
    return () => {
      timeline.kill(); // Kill the animation when the component unmounts
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <div className="projects" data-aos="fade-up">
        <p>
          Test<span>i</span>mon<span>i</span>al
        </p>
      </div>
      <div className="wrapper">
        <div className="boxes">
          <div className="box"><TestimonialCard /></div>
          <div className="box"><TestimonialCard /></div>
          <div className="box"><TestimonialCard /></div>
          <div className="box"><TestimonialCard /></div>
          <div className="box"><TestimonialCard /></div>
          <div className="box"><TestimonialCard /></div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
