const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

let PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log("Production Express server running at localhost:", PORT);
});
