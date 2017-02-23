import React from 'react';
import {Link} from 'react-router';
import {NavLink} from './NavLink';

export const App = (props) => ( 
  <div>
    <h1>Hello React Router!</h1>
    <ul role="nav">
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/repos">Repos</NavLink>
      </li>
    </ul>
    {props.children} 
  </div>
)