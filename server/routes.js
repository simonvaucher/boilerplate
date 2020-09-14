const mockResponse = {
  foo: "bar",
  bar: "baz",
  egg: "ham",
};

function mount(app) {
  app.get("/api", (_req, res) => {
    res.send(mockResponse);
  });
}

module.exports = { mount };
