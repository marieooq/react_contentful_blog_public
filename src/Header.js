import React from "react";
import logo from "./img/vanStudentsInfo_logo.png";
import Contentful from "./Contentful";
import { Route, Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  state = {
    arrayData: []
  };

  getDataFromContentful = async () => {
    const contentful = new Contentful();
    const response = await contentful.getArtcles();
    this.setState({
      arrayData: response.items
    });
  };

  componentDidMount() {
    this.getDataFromContentful();
  }
  render() {
    const tagArray = this.state.arrayData.map(data => {
      return data.fields.tags;
    });

    let tagData = [];
    tagArray.forEach(data => {
      data.forEach(child => {
        tagData.push(child);
      });
    });

    const tagLists = tagData.map(data => {
      switch (data) {
        case "ランチ":
          return <li>Food</li>;
        case "コスパ":
          return <li>Good Value</li>;
        case "スーパー":
          return <li>Shopping</li>;
        default:
          return <li>default</li>;
      }
    });

    return (
      <div id="header">
        <div className="header-logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" id="logo"></img>
          </Link>
        </div>
        <ul className="header-nav">{tagLists}</ul>
      </div>
    );
  }
}

export default Header;
