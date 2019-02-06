import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import Nav from "./Nav";
import Post from "./Post";

class Feed extends Component {
  state = {
    loaded: false,
    postList: [],
    currentUser: 4
  };

  componentDidMount() {
    this.updateFeed();
  }

  updateFeed = () => {
    fetch("https://tp-classic-back.herokuapp.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ postList: json.posts, loaded: true }));
  };

  deletePost = (post_id, user_id) => {
    if (user_id === this.state.currentUser) {
      fetch(`https://tp-classic-back.herokuapp.com/posts/${post_id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(this.updateFeed)
        .catch(console.log("error"));
    }
    else {
      alert('Please choose one of your own posts.')
    }};

  render() {
    return (
      <div>
        <Nav />
        <div className="feed">
          {this.state.loaded ? (
            this.state.postList.map(post => {
              return (
                <Post
                  key={post.post_id}
                  postData={post}
                  deletePost={this.deletePost}
                />
              );
            })
          ) : (
            <Loader active inline="centered" />
          )}
        </div>
      </div>
    );
  }
}

export default Feed;
