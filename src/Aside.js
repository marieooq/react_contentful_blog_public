import React from "react";
import logo from "./img/profile_marie.jpg";
import Contentful from "./Contentful";
import "./Aside.css";

class Aside extends React.Component {
  state = {};
  render() {
    return (
      <div className="aside">
        <div className="profile">
          <img src={logo} alt="profile"></img>
          <div className="profile-description">
            新卒で日系SIerに就職。スタートアップの営業を経た後、独学でWebデザインを勉強。現在バンクーバーにてフロントエンドデベロッパーとして就職するべく奮闘中。バンクーバーの学生にとって役立つ情報を発信していきます！
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;
