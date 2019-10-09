import * as contentful from "contentful";
import Config from "./Config";

class Contentful {
  constructor() {
    this.client = contentful.createClient(Config.contentful);
  }

  getArtcles(skip, data) {
    const self = this;
    //refer to the data using contentful API
    return new Promise(function(resolve, reject) {
      self.client
        .getEntries({
          order: "sys.createdAt",
          content_type: data,
          //the number of contents for each page
          limit: 10
        })
        .then(entries => {
          resolve(entries);
        });
    });
  }

  getArtcle(skip, data, slug) {
    //refer to the data using contentful API
    return this.client.getEntries({
      order: "-sys.createdAt",
      content_type: data,
      "fields.slug": slug
    });
  }
}

export default Contentful;
