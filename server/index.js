const routes = require("./routes");
const express = require("express");

const app = express();
const port = process.env.port || 3003;

routes.mount(app);

app.listen(port, () => {
  console.log(`Listening on port ${3000}`);
});
