import React from "react";
import * as contentful from "contentful";
import Config from "./Config";

const Contentful = (skip, data) => {
  const client = contentful.createClient(Config.contentful);

  //refer to the data using contentful API
  return new Promise(function(resolve, reject) {
    client
      .getEntries({
        order: "sys.createdAt",
        content_type: data,
        //the number of contents for each page
        limit: 4
      })
      .then(entries => {
        resolve(entries);
      });
  });
};

export default Contentful;
