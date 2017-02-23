import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import { App} from './src/App';
import {About} from './src/About';
import {Repos} from './src/Repos';

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/about' component={About}></Route>
      <Route path='/repos' component={Repos}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
)