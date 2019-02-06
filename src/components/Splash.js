import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import LoginList from "./LoginList.js";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  userListener = e => {
    e.preventDefault();
    this.setState({ username: e.target.value });
    console.log(e.target.value);
  };

  passwordListener = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
    console.log(e.target.value);
  };

  loginHandler = () => {
    if (
      this.state.username === "DamnFineCoffee" &&
      this.state.password === "t1b3t"
    ) {
      window.location.assign("https://twinpeaksgazette.surge.sh/feed");
    } else {
      alert("Invalid User/Pass");
    }
  };

  render() {
    return (
      <div class="ui splash">
        <h1 className="splash-title">Twin Peaks Gazette</h1>
        <div class="column">
          <form class="ui large form">
            <div class="ui segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon" />
                  <input
                    onChange={this.userListener}
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon" />
                  <input
                    onChange={this.passwordListener}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <span onClick={this.loginHandler}>
                <div class="ui fluid large red submit button">Log In</div>
              </span>
            </div>
            <div class="ui error message" />
          </form>
          <LoginList />
        </div>
      </div>
    );
  }
}

export default Splash;
