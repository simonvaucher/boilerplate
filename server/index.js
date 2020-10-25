const routes = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const DIST_DIR = path.join(__dirname, "../dist");
const HTML_DIR = path.join(__dirname, "index.html");

const app = express();

// use webpack artifacts from static folder
app.use(express.static(DIST_DIR));

// Very common middleware to parse body as a proper object.
// Does not work well with multipart forms etc.
app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.sendFile(HTML_FILE);
});

// API routes are mounted separately
routes.mount(app);

const port = process.env.port || 3003;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
