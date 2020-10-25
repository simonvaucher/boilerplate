const Aggregator = require("./Aggregator");

const { User, Blog, Tag } = require("./sequelize");

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

  // CREATE user
  app.post("/api/users", (req, res) => {
    console.log(req.body);
    User.create(req.body).then(user => res.json(user));
  });

  // SELECT * from 'users'
  app.get("/api/users", (req, res) => {
    User.findAll().then(users => res.json(users));
  });

  app.get("/api/error", async (req, res) => {
    return res.status(400).json({ status: 400, message: "MOCK ERROR" });
  });
}

module.exports = { mount };
