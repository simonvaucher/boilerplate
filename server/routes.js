const Aggregator = require("./Aggregator");

const mockResponse = {
  foo: "bar",
  bar: "baz",
  egg: "ham",
};

function mount(app) {
  app.get("/api", (_req, res) => {
    res.send(mockResponse);
  });

  // Later => get pagination from request. Maybe.
  // Later => pass feed list from configuration
  app.get("/api/feeds", async (req, res) => {
    try {
      const aggregator = new Aggregator();
      const feed = await aggregator.getFeeds();
      res.json(feed);
    } catch (e) {
      next(e);
    }
  });
}

module.exports = { mount };
