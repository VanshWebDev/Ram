import React, { useEffect } from "react";
import shiva from "./Media/Shiva.png";

const TestimonialCard = (props) => {
  useEffect(() => {
    const wrapper = document.querySelector(".cards");

    // Check if the wrapper element exists before adding event listener
    if (wrapper) {
      const cards = document.querySelectorAll(".card");

      const handleMouseMove = (event) => {
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          card.style.setProperty("--xPos", `${x}px`);
          card.style.setProperty("--yPos", `${y}px`);
        });
      };

      wrapper.addEventListener("mousemove", handleMouseMove);

      return () => {
        wrapper.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []); // Add an empty dependency array to ensure this effect runs only once

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="row1">
            <div className="row1-1">
              <img src={shiva} alt="" />
              <p>Shiva</p>
            </div>
            <div className="row1-2">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="row2">
            <p>force y value to wrap when it reaches -100</p>
          </div>
        </div>
      </div>
      </>
  );
};

export default TestimonialCard;
