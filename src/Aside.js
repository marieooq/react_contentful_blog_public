import React from "react";
import logo from "./img/profile_marie.jpg";
import Contentful from "./Contentful";
import "./Aside.css";

class Aside extends React.Component {
  state = {
    arrayData: [],
    recommendId: "5yUivRoyfq5WNbDpgwd6Ew"
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
      return <li>{data}</li>;
    });

    const recommendImg = this.state.arrayData.map(data => {
      if (
        data.fields.heroImage !== undefined &&
        data.sys.id === this.state.recommendId
      ) {
        const imgURL = data.fields.heroImage.fields.file.url;
        return imgURL;
      }
    });

    return (
      <div className="aside">
        <div className="aside-container">
          <div className="profile">
            <img src={logo} alt="profile" id="profile-img"></img>
            <p id="author">Marie</p>
            <div className="profile-description">
              新卒で日系SIerに就職するも、自分自身の成長速度に疑問を感じ、1年で退職。スタートアップの営業を経た後、独学でWebデザインを勉強。現在バンクーバーにてフロントエンドデベロッパーとして就職するべく奮闘中。バンクーバーの学生にとって役立つ情報を発信していきます！
            </div>
          </div>

          <div className="tag-lists section">
            <h2 className="title">記事カテゴリ</h2>
            <ul>{tagLists}</ul>
          </div>

          <div className="recommend section">
            <h2 className="title">おすすめ記事</h2>
            <img src={recommendImg[0]} alt="recommend" id="recommend-img"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;
