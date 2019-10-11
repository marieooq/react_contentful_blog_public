import React from "react";
import logo from "./img/vanStudentsInfo_logo.png";
import Contentful from "./Contentful";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  state = {
    arrayData: []
  };

  // getDataFromContentful = async () => {
  //   const contentful = new Contentful();
  //   const response = await contentful.getArtcles();
  //   this.setState({
  //     arrayData: response.items
  //   });
  // };

  // async componentDidMount () {
  //   const contentful = new Contentful();
  //   try {
  //     const article = await contentful.getArtcleWithTags(undefined, "", tags);
  //     this.setState({ arrayData: article.items });
  //   } catch (err) {
  //     console.log("error");
  //     console.log(err);
  //   }
  // }

  render() {
    const tagArray = this.state.arrayData.map(data => {
      console.log("-------");
      console.log(data);
      console.log("-------");
      return data.fields.tags;
    });

    let tagData = [];
    tagArray.forEach(data => {
      data.forEach(child => {
        tagData.push(child);
      });
    });

    // const tagLists = tagData.map(data => {
    //   switch (data) {
    //     case "ランチ":
    //       return <li>Food</li>;
    //     case "コスパ":
    //       return <li>Good Value</li>;
    //     case "スーパー":
    //       return <li>Shopping</li>;
    //     default:
    //       return <li>default</li>;
    //   }
    // });

    const tagLists = [
      <Link to="/tag/food">Food</Link>,
      <Link to="/tag/supermarket">Shopping</Link>
    ];

    return (
      <div id="header">
        <div className="header-container">
          <div className="header-logo">
            <Link to={"/"}>
              Vancouver <span id="logo-students">Students</span>
              {/* <img src={logo} alt="logo" id="logo"></img> */}
            </Link>
          </div>
          <ul className="header-nav">{tagLists}</ul>
        </div>
      </div>
    );
  }
}

export default Header;
