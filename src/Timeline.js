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

      const createImageTag = () => {
        let tag = data.fields.tags[0].toUpperCase();
        console.log(tag);
        return <div className="thumbnail-tag">{tag}</div>;
      };

      createImageTag();

      const returnDescription = () => {
        return data.fields.description;
      };

      return (
        <div className="article">
          <div className="imageArea">
            {createImageTag()}
            {returnImageURI()}
          </div>
          <div className="descriptionArea">
            <div className="titles">
              <Link to={`/article/${returnSlug()}`}> {data.fields.title}</Link>
            </div>
            <ReactMarkdown
              className="description"
              source={returnDescription()}
            />

            <div className="detail-btn">
              <Link to={`/article/${returnSlug()}`}>READ MORE</Link>
            </div>
          </div>
        </div>
      );
    });

    return <div className="article-container">{list}</div>;
  }
}

export default Timeline;
