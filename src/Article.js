import React from "react";
import ReactMarkdown from "react-markdown";
import Contentful from "./Contentful";
import "./Article.css";

class Article extends React.Component {
  state = {
    articleFromContentful: []
  };

  async componentDidMount() {
    const { slug } = this.props.match.params;
    //get article from contentful API
    const contentful = new Contentful();
    try {
      const article = await contentful.getArtcle(undefined, "blogPost", slug);
      this.setState({ articleFromContentful: article.items });
    } catch (err) {
      console.log("errorです");
      console.log(err);
    }
  }

  render() {
    const bodyOfArticle = this.state.articleFromContentful.map(data => {
      const returnTitle = () => {
        console.log(data.fields.title);
        return data.fields.title;
      };

      const returnBody = () => {
        console.log(data.fields.body);
        return data.fields.body;
      };

      returnBody();

      return (
        <div className="article-container">
          <div className="article-title">{returnTitle()}</div>
          <div className="article-body">
            <ReactMarkdown source={returnBody()}></ReactMarkdown>
          </div>
        </div>
      );
    });

    return <div className="article-outer">{bodyOfArticle}</div>;
  }
}

export default Article;
