import React from "react";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          We Are
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

export default App;