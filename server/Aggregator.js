const Parser = require("rss-parser");

class Aggregator {
  constructor() {
    this.parser = new Parser();
  }
  async getFeeds() {
    return await this.parser.parseURL("https://blog.lostartpress.com/feed");
    // return { foo: "bar" };
  }
}

module.exports = Aggregator;
