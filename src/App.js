import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./components/Splash.js";
import Feed from "./components/Feed.js";
import CommentList from "./components/CommentList.js";
import ComposePost from "./components/ComposePost.js";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Splash} exact />
          <Route path="/feed" component={Feed} />
          <Route path="/comments" component={CommentList} />
          <Route path="/compose" component={ComposePost} />
        </div>
      </Router>
    );
  }
}

export default App;
