import React, { useEffect } from "react";
import shiva from "./Media/Shiva.png";

const TestimonialCard = (props) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const wrapper = document.querySelector(".cards");

    wrapper.addEventListener("mousemove", function (event) {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--xPos", `${x}px`);
        card.style.setProperty("--yPos", `${y}px`);
      });
    });

    return () => {
      wrapper.removeEventListener("mousemove", () => {});
    };
  }, []); // Add an empty dependency array to ensure this effect runs only once

  return (
    <>
      
        <div className="card">
          <div className="card-content">
            {/* -------------------------------- */}
            <div className="row1">
              <div className="row1-1">
                <img src={shiva} alt="" />
                <p>Shiva</p>
              </div>
              <div className="row1-2">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            {/* -------------------------------- */}
            <div className="row2">
              <p>Your website design is truly remarkable. It exhibits a perfect blend of creativity and functionality, leaving a lasting impression on users. Your talent shines brightly through your work, showcasing your exceptional skills and dedication to excellence.</p>
            </div>
            {/* -------------------------------- */}
          </div>
        </div>
   

      {/* <button class="glow-on-hover" type="button">
        HOVER ME, THEN CLICK ME!
      </button> */}
    </>
  );
};

export default TestimonialCard;
