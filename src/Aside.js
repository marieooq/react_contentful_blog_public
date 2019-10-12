import React from "react";
import logo from "./img/profile_marie.jpg";
import Contentful from "./Contentful";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
    const recommendArea = this.state.arrayData.map(data => {
      const returnRecommendImg = () => {
        if (
          data.fields.heroImage !== undefined &&
          data.sys.id === this.state.recommendId
        ) {
          const imgURL = data.fields.heroImage.fields.file.url;
          return imgURL;
        }
      };

      const returnTitle = () => {
        if (data.sys.id === this.state.recommendId) {
          const title = data.fields.title;
          return title;
        }
      };

      return (
        <div className="recommend section">
          <h2 className="title">RECOMMEND</h2>
          <Link to={"article/reasonable-lunch"}>
            <img
              src={returnRecommendImg()}
              alt="recommend"
              id="recommend-img"
            ></img>
            <div className="recommend-title">{returnTitle()}</div>
          </Link>
        </div>
      );
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
          <a
            class="twitter-timeline"
            href="https://twitter.com/MarieWoq?ref_src=twsrc%5Etfw"
          >
            Tweets by MarieWoq
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
          {recommendArea[0]}
        </div>
      </div>
    );
  }
}

export default Aside;
