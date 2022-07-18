import "./App.css";
import Card from "./components/card/card";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thankyou from "./components/thankyoucard/thankyou";

function App() {
  const [rate, setRate] = useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Card rate={rate} setRate={setRate} />} />
          <Route path="thankyou" element={<Thankyou />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
