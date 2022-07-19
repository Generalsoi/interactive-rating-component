import "./App.css";
import Card from "./components/card/card";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thankyou from "./components/thankyoucard/thankyou";

function App() {
  const [rate, setRate] = useState(null);

  //function to handle the selection of the rate
  const handleRate = (e) => {
    // if (rate === e.target.innerHTML) {
    //   e.target.style.background = "#7C8798";
    // }

    setRate(e.target.innerHTML);
    e.target.classList.add("active");

    if (rate !== e.target.innerHTML) {
      e.target.classList.remove("active");
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Card rate={rate} setRate={setRate} handleRate={handleRate} />
            }
          />
          <Route path="thankyou" element={<Thankyou rate={rate} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
