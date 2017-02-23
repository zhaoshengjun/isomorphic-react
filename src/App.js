import React from 'react';
import {Link} from 'react-router';
import {NavLink} from './NavLink';

export const App = (props) => ( 
  <div>
    <h1>Hello React Router!</h1>
    <ul role="nav">
      <li>
        <Link to="/about" activeClassName="active">About</Link>
      </li>
      <li>
        <Link to="/repos" activeStyle={{color:'red'}}>Repos</Link>
      </li>
    </ul>
    {props.children} 
  </div>
)