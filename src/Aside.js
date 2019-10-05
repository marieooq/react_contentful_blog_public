import React from "react";
import logo from "./img/profile_marie.jpg";
import Contentful from "./Contentful";
import "./Aside.css";

class Aside extends React.Component {
  state = {
    arrayData: []
  };

  getDataFromContentful = async () => {
    const response = await Contentful();
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
      return <li>{data}</li>;
    });

    return (
      <div className="aside">
        <div className="profile">
          <img src={logo} alt="profile"></img>
          <div className="profile-description">
            新卒で日系SIerに就職。スタートアップの営業を経た後、独学でWebデザインを勉強。現在バンクーバーにてフロントエンドデベロッパーとして就職するべく奮闘中。バンクーバーの学生にとって役立つ情報を発信していきます！
          </div>
          <div className="tag-lists section">
            <h2 className="title">記事カテゴリ</h2>
            <ul>{tagLists}</ul>
          </div>
          <div className="recommend section">
            <h2 className="title">おすすめ記事</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;
