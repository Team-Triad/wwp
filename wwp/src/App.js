import React from "react";
import Header from "./components/Header.js";
import "./App.css";
import Login from "./components/Login";

function App() {
    return ( <div className = "App" >
        <div className = "container" >
        <h1> Hello Brother </h1> 
        <Header />
        <Login />
        </div> 
        </div>
    );
}

export default App;