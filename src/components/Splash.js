import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../assets/tp-logo.png";
import LoginList from './LoginList.js'

const Splash = () => {
  return (
    <div class="ui splash">
      <h1 className="splash-title">Welcome to Twin Peaks</h1>
      <div class="column">
        <form class="ui large form">
          <div class="ui red segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon" />
                <input type="text" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon" />
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <Link to="/feed">
              <div class="ui fluid large red submit button">Log In</div>
            </Link>
          </div>
          <div class="ui error message" />
        </form>
        <LoginList />
      </div>
    </div>
  );
};

export default Splash;
