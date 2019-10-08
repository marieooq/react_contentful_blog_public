import React from "react";
// import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import Contentful from "./Contentful";
import { Route, Link } from "react-router-dom";
import "./Timeline.css";

class Timeline extends React.Component {
  state = {
    arrayData: []
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
    const list = this.state.arrayData.map((data, index) => {
      const returnSlug = () => {
        const slug = data.fields.slug;
        return slug;
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
            <div className="titles">
              <Link to={`/article/${returnSlug()}`}> {data.fields.title}</Link>
            </div>
            <ReactMarkdown className="description" source={truncateBody()} />
            <Route to={`/article/${returnSlug()}`}>続きはこちら</Route>
          </div>
        </div>
      );
    });

    return <div className="article-container">{list}</div>;
  }
}

export default Timeline;
