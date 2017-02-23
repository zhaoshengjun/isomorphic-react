import React from 'react';
import {IndexLink} from 'react-router';
import {NavLink} from './NavLink';
import {Home} from './Home';

export const App = (props) => ( 
  <div>
    <h1>Hello React Router!</h1>
    <ul role="nav">
      <li>
        <NavLink to="/" onlyActiveOnIndex={true} >Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/repos">Repos</NavLink>
      </li>
    </ul>
    {props.children || Home} 
  </div>
)