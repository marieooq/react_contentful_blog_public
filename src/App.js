import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Timeline from "./Timeline";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import Article from "./Article";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Timeline} />
            <Route path="/article/:slug" component={Article} />
          </Switch>
          <Aside />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
