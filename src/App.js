import "./App.css";
import Card from "./components/card/card";
import React, { useState } from "react";

function App() {
  const [rate, setRate] = useState(null);
  return (
    <div className="App">
      <Card rate={rate} setRate={setRate} />
    </div>
  );
}

export default App;
