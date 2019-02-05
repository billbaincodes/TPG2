import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import Nav from "./Nav";
import Post from "./Post";

class Feed extends Component {
  state = {
    loaded: false,
    postList: []
  };

  componentDidMount() {
    fetch("https://tp-classic-back.herokuapp.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ postList: json.posts, loaded:true }))
  }

  render() {
    return (
        <div className="feed">
          {this.state.loaded
            ? this.state.postList.map(post => {
            return <Post postData={post}/> 
            })
            : "candy"}

        </div>
    );
  }
}

export default Feed;
