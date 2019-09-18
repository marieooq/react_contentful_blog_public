import React from "react";
import logo from "./img/vanStudentsInfo_logo.png";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <img src={logo} alt="logo image" id="logo"></img>
        <form id="form1" action="https://vanstudents.com" method="get">
          <input
            id="sbox1"
            name="sbox"
            type="text"
            placeholder="キーワードを入力"
          />
          <input id="sbtn1" type="submit" value="検索" />
        </form>
      </div>
    );
  }
}

export default Header;
