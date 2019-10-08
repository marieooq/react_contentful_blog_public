import React from "react";
// import ReactDOM from "react-dom";
import Contentful from "./Contentful";

class Article extends React.Component {
  state = {
    articleFromContentful: []
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
    console.log(this.state.articleFromContentful);

    const bodyOfArticle = this.state.articleFromContentful.map(data => {
      return data.fields.body;
    });

    console.log(bodyOfArticle);

    return <div>{bodyOfArticle}</div>;
  }
}

export default Article;
