import React from "react";
// import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import Contentful from "./Contentful";
import { Link } from "react-router-dom";

class Article extends React.Component {
  state = {};
  componentDidMount() {
    const { slug } = this.props.match.params;
    // Contentful api 叩いて記事データ取得
    const article = {
      text: "sample"
    };
  }

  render() {
    return <div>Article</div>;
  }
}

export default Article;
