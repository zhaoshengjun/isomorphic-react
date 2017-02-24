const express = require("express");
const path = require("path");
const compression = require("compression");
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import { routes } from "./src/routes";

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  if (err) {
    res.status(500).send(err.message);
  } else if (redirect) {
    res.redirect(redirect.pathname + redirect.search);
  } else if (props) {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
      const appHtml = renderToString(<RouterContext {...props} />);
      res.send(renderPage(appHtml));
    });
  } else {
    res.status(404).send("Not found");
  }
});

let PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log("Production Express server running at localhost:", PORT);
});

const renderPage = appHtml => {
  return `
  <html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React Router App</title>
  <link rel="stylesheet" href="/index.css">
</head>
<body>
  <div id="app">${appHtml}</div>
  <script src="/bundle.js"></script>
</body>

</html>
  `;
};
