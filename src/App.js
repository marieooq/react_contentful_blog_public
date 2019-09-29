import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Timeline from "./Timeline";
import Header from "./Header";
import Aside from "./Aside";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Timeline />
        <Aside />
      </div>
    </div>
  );
}

export default App;
