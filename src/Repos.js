import React, { Component } from "react";
import { browserHistory } from "react-router";
import { NavLink } from "./NavLink";

export class Repos extends Component {
  // static contextTypes = {
  //   router: React.PropTypes.object
  // }

  handleSubmit(evt) {
    evt.preventDefault();
    const userName = evt.target.elements[0].value;
    const repo = evt.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;
    console.log(path);
    browserHistory.push(path);
    // this.contextTypes.router.push(path)
  }

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li>
            <NavLink to="/repos/reactjs/react-router">React Router</NavLink>
          </li>
          <li>
            <NavLink to="/repos/facebook/react">React</NavLink>
          </li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="user name" /> / {" "}
              <input type="text" placeholder="repo" /> {" "}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}
