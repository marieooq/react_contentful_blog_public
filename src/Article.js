import React from "react";
// import ReactDOM from "react-dom";
import Contentful from "./Contentful";

class Article extends React.Component {
  state = {
    articleFromContentful: {}
  };

  async componentDidMount() {
    const { slug } = this.props.match.params;
    // Contentful api 叩いて記事データ取得
    const contentful = new Contentful();
    try {
      const article = await contentful.getArtcle(undefined, "blogPost", slug);
      console.log(article);
      this.setState({ articleFromContentful: article.items });
    } catch (err) {
      console.log("errorです");
      console.log(err);
    }
  }

  render() {
    const returnArticle = () => {
      console.log("inside returnArticle method");
      console.log(this.state.articleFromContentful);
    };
    returnArticle();
    return <div>Article</div>;
  }
}

export default Article;
