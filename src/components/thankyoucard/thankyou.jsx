import React from "react";
import "./thankyou.css";
import ThankYou from "../../assets/images/thankyouimg";

const Thankyou = () => {
  return (
    <div className="card">
      <div className="thankyou-img">
        <img src={ThankYou} alt="thankyou" />
      </div>
    </div>
  );
};

export default Thankyou;
