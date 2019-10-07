import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Timeline from "./Timeline";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Timeline />
          <Aside />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
