import React, { useState } from "react";
import "./card.css";
import Star from "../../assets/images/Star.png";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  //using array destructuring to pass the rate
  //and setRate props to this Card component.
  const { rate, setRate, handleRate } = props;
  console.log(rate);

  //initializing the navigate component
  const navigate = useNavigate();

  //function to handle submit on clicking the submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    if (rate !== null) {
      navigate("/thankyou");
    }
  };

  //function to handle the selection of the rate
  // const handleRate = (e) => {
  //   // if (rate === e.target.innerHTML) {
  //   //   e.target.style.background = "#7C8798";
  //   // }

  //   setRate(e.target.innerHTML);
  //   e.target.classList.add("active");

  //   if (rate !== e.target.innerHTML) {
  //     e.target.classList.remove("active");
  //   }
  // };

  return (
    <div className="card">
      <div className="star-div">
        <img src={Star} alt="star" />
      </div>

      <div className="question-div">
        <h4>How did we do?</h4>
        <p>Please let us know how we did with your support</p>
        <p>request. All feedback is appreciated to help us</p>
        <p>improve our offering!</p>
      </div>

      <div className="ratings-div">
        <div onClick={handleRate} className="rating">
          1
        </div>
        <div onClick={handleRate} className="rating">
          2
        </div>
        <div onClick={handleRate} className="rating">
          3
        </div>
        <div onClick={handleRate} className="rating">
          4
        </div>
        <div onClick={handleRate} className="rating">
          5
        </div>
      </div>

      <div className="submit-btn">
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Card;
