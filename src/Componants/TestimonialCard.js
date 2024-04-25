import React, { useEffect } from "react";
import shiva from "./Media/Shiva.png";
import "../CSS/Testimonial.css";

const TestimonialCard = (props) => {
  let rating = props.data.rating;
  let ratingArr = [];
  for (let i = 0; i < rating; i++) {
    ratingArr.push(<i className="fa fa-star" key={i}></i>);
  }
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
              <p>{props.data.name}</p>
            </div>
            <div className="row1-2">{ratingArr}</div>
          </div>
          <div className="row2">
            <p>
              {props.data.description.slice(0, 80)}{" "}
              <span className="animate-pulse opacity-1">
                <b>...</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
