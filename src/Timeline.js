import React from "react";
// import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import Contentful from "./Contentful";
import { Link } from "react-router-dom";
import "./Timeline.css";

class Timeline extends React.Component {
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
    const list = this.state.arrayData.map(data => {
      const returnPublishDate = () => {
        console.log(data.fields.publishDate);
        const publishDate = data.fields.publishDate.substring(0, 10);
        console.log(publishDate);
      };

      const returnImageURI = () => {
        if (data.fields.heroImage !== undefined) {
          const imageURL = data.fields.heroImage.fields.file.url;
          return (
            <div className="thumbnails">
              <img src={imageURL} alt="thumbnail"></img>
            </div>
          );
        }
      };

      const truncateBody = () => {
        const cutPoint = 150;

        if (data.fields.body !== undefined) {
          const bodyContent = data.fields.body;
          const bodyLength = bodyContent.length;

          if (bodyLength > cutPoint) {
            const tContent = bodyContent.substring(0, cutPoint) + "...";
            return tContent;
          } else {
            return bodyContent;
          }
        }
      };

      return (
        <div className="article">
          <div className="imageArea">{returnImageURI()}</div>
          <div className="descriptionArea">
            <div className="titles">{data.fields.title}</div>
            <ReactMarkdown className="description" source={truncateBody()} />
            <a
              href="https://marieotaki.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              続きはこちら
            </a>
          </div>
        </div>
      );
    });

    return <div className="article-container">{list}</div>;
  }
}

export default Timeline;
