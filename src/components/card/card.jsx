import React from "react";
import "./card.css";
import Star from "../../assets/images/Star.png";

const Card = () => {
  return (
    <div className="card">
      <div className="star-div">
        <img src={Star} alt="star" />
      </div>

      <div classname="question-div">
        <h4>How did we do?</h4>
        <p>Please let us know how we did with your support</p>
        <p>request. All feedback is appreciated to help us</p>
        <p>improve our offering!</p>
      </div>

      <div className="ratings-div">
        <div>
          <p>1</p>
        </div>
        <div>
          <p>2</p>
        </div>
        <div>
          <p>3</p>
        </div>
        <div>
          <p>4</p>
        </div>
        <div>
          <p>5</p>
        </div>
      </div>

      <div className="submit-btn">
        <button>SUBMIT</button>
      </div>
    </div>
  );
};

export default Card;
