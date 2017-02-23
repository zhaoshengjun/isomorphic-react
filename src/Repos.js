import React from 'react';
import {NavLink} from './NavLink';

export const Repos = (props) => (
  <div>
    <h2>Repos</h2>
    <ul>
      <li>
        <NavLink to="/repos/reactjs/react-router">React Router</NavLink>
      </li>
      <li>
        <NavLink to="/repos/facebook/react">React</NavLink>
      </li>
    </ul>
    {props.children}
  </div>
)