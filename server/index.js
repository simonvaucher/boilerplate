const routes = require("./routes");
const express = require("express");
const path = require("path");

const DIST_DIR = path.join(__dirname, "../dist");
const HTML_DIR = path.join(__dirname, "index.html");

const app = express();
const port = process.env.port || 3003;

// API routes are mounted separately
routes.mount(app);

// Production: serve webpack artifacts from static folder
app.use(express.static(DIST_DIR));

app.get("/", (_req, res) => {
  // res.status(200).send("Hello World!");
  res.sendFile(HTML_FILE);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
