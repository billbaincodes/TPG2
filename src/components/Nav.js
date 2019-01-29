import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="App">
        <div class="ui red inverted medium top bound menu">
          <div class="ui container">
            <a class="active item">Home</a> <a class="item">Work</a>
            <a class="item">Company</a> <a class="item">Careers</a>
            <div class="right menu">
              <Link to="/">
              <div class="item">
                <a class="ui button">Sign Out</a>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
