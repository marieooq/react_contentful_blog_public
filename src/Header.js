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
      <Link to="/tag/ランチ">ランチ</Link>,
      <Link to="/tag/スーパー">スーパー</Link>
    ];

    const Child = ({ match }) => (
      <div>
        <h3>ID:{match.params.id}</h3>
      </div>
    );

    return (
      <div id="header">
        <div className="header-logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" id="logo"></img>
          </Link>
        </div>
        <ul className="header-nav">{tagLists}</ul>

        {/* <Router>
          <ul>
            <li>
              <Link to="/google">Google</Link>
            </li>
            <li>
              <Link to="/apple">Apple</Link>
            </li>
            <li>
              <Link to="/facebook">Facebook</Link>
            </li>
            <li>
              <Link to="/amazon">Amazon</Link>
            </li>
          </ul>
          <Route path="/:id" component={Child}></Route>
        </Router> */}
      </div>
    );
  }
}

export default Header;
