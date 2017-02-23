import React from 'react';
import {Link} from 'react-router';

export const App = (props) => ( 
  <div>
    <h1>Hello React Router!</h1>
    <ul role="nav">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/repos">Repos</Link>
      </li>
    </ul>
    {props.children} 
  </div>
)