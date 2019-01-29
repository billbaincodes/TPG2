import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import Nav from "./Nav";
import Post from "./Post";

class Feed extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="ui container cards">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default Feed;
