import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Timeline from "./Timeline";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import Article from "./Article";
import ArticlesWithTag from "./ArticlesWithTag";
import GlobalStyle from "./grobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Timeline} />
            <Route path="/article/:slug" component={Article} />
            <Route path="/category/:tag" component={ArticlesWithTag} />
          </Switch>
          <Aside />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
