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
      return data.fields.body;
    });

    console.log(this.state.articleFromContentful);
    console.log(bodyOfArticle[0]);

    const Image = props => {
      return <img {...props} style={{ maxWidth: "80%" }} alt="article-img" />;
    };

    const returnImageText = () => {
      const myRegexp = /^!/;
      //ng!
      // const myText = bodyOfArticle[0];
      //ok!
      const myText = "!Hello";
      //TypeError: Cannot read property 'match' of undefined
      const result = myText.match(myRegexp);
      console.log(result);
    };

    returnImageText();

    return (
      <div className="article-container">
        {/* <div className="article-content">{bodyOfArticle}</div> */}
        <ReactMarkdown source={bodyOfArticle[0]}></ReactMarkdown>
        <ReactMarkdown
          source="![cosco hotdog 2](//images.ctfassets.net/79vndjll5vfu/6As4qiAJzaAKy3P25X8MUW/424cb0cadb2ae6624e02c0b009c02bca/cosco_hotdog_2.jpeg)"
          renderers={{ image: Image }}
        />
      </div>
    );
  }
}

export default Article;
