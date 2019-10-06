import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Timeline from "./Timeline";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Timeline />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
