import React from "react";
import Contentful from "./Contentful";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  state = {
    arrayData: []
  };

  render() {
    const list = {
      Food: "food",
      Leisure: "leisure"
    };

    const navList = Object.keys(list).map(keyName => {
      return (
        <li>
          <Link to={`/category/${list[keyName]}`}>{keyName}</Link>
        </li>
      );
    });

    return (
      <div id="header">
        <div className="header-container">
          <div className="header-logo">
            <Link to={"/"}>
              Vancouver <span id="logo-students">Students</span>
            </Link>
          </div>
          <ul className="header-nav">{navList}</ul>
        </div>
      </div>
    );
  }
}

export default Header;
