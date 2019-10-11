import React from "react";
import ReactMarkdown from "react-markdown";
import Contentful from "./Contentful";
import "./Article.css";

class ArticlesWithTag extends React.Component {
  state = {
    articleFromContentful: []
  };

  async componentDidMount() {
    console.log("componentDidMount");
    const { tag } = this.props.match.params;
    //get article from contentful API
    const contentful = new Contentful();
    try {
      const article = await contentful.getArtcleWithTags(
        undefined,
        "blogPost",
        tag
      );
      this.setState({ articleFromContentful: article.items });
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  }

  // async componentDidUpdate() {
  //   const { tag } = this.props.match.params;
  //   //get article from contentful API
  //   const contentful = new Contentful();
  //   try {
  //     const article = await contentful.getArtcleWithTags(
  //       undefined,
  //       "blogPost",
  //       tag
  //     );
  //     this.setState({ articleFromContentful: article.items });
  //   } catch (err) {
  //     console.log("error");
  //     console.log(err);
  //   }
  // }

  render() {
    const bodyOfArticle = this.state.articleFromContentful.map(data => {
      const returnTitle = () => {
        return data.fields.title;
      };

      const returnPublishedDate = () => {
        let date = data.fields.publishDate.substring(0, 10);
        let replacedDate = date.replace("-", "/");

        while (date !== replacedDate) {
          date = date.replace("-", "/");
          replacedDate = replacedDate.replace("-", "/");
        }
        return replacedDate;
      };

      const returnBody = () => {
        return data.fields.body;
      };

      const returnTags = () => {
        const tagList = data.fields.tags.map(data => {
          const listContent = `#${data}`;
          return <li>{listContent}</li>;
        });
        return tagList;
      };

      returnTags();
      return (
        <div className="article-container">
          <div className="article-title">{returnTitle()}</div>
          <p className="article-date">{returnPublishedDate()}</p>
          <div className="article-body">
            <ReactMarkdown source={returnBody()}></ReactMarkdown>
          </div>
          <div className="article-tags">
            <ul>{returnTags()}</ul>
          </div>
        </div>
      );
    });

    return <div className="article-outer">{bodyOfArticle}</div>;
  }
}

export default ArticlesWithTag;
