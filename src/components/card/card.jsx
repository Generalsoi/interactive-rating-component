import React from "react";
import "./card.css";
import Star from "../../assets/images/Star.png";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  //using array destructuring to pass the rate
  //and setRate props to this Card component.
  const { rate, setRate } = props;
  console.log(rate, "here");

  const ratesArray = [1, 2, 3, 4, 5];

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
        {/*  */}
        {ratesArray.map((userRate) => (
          <div
            onClick={() => setRate(userRate)}
            className={`rating ${userRate === rate && "active"}`}
          >
            {userRate}
          </div>
        ))}
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
