const mockResponse = {
  foo: "bar",
  bar: "baz",
};

function mount(app) {
  app.get("/api", (_req, res) => {
    res.send(mockResponse);
  });
  app.get("/", (_req, res) => {
    res.status(200).send("Hello World!");
  });
}

module.exports = { mount };
