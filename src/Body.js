import React from "react";
import Contentful from "./Contentful";

class Body extends React.Component {
  state = {
    arrayData: []
  };
  componentDidMount() {
    Contentful().then(resolveData => {
      console.log(resolveData);
      this.setState({
        arrayData: resolveData.items
      });
    });
  }
  render() {
    const list = this.state.arrayData.map(item => {
      return <li>{item.fields.title}</li>;
    });

    return list;
  }
}

export default Body;
