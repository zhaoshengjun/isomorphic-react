import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { App } from "./src/App";
import { About } from "./src/About";
import { Repos } from "./src/Repos";
import { Repo } from "./src/Repo";
import { Home } from "./src/Home";

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
    </Route>
  </Router>,
  document.getElementById("app")
);
