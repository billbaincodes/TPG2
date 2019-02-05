import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Card, Icon } from "semantic-ui-react";
import Nav from "./Nav";

class Post extends Component {
  render() {
    return (
      <Link to="/comments">

      <div className="ui card">
        <div className="content">
          <div className="right floated meta">14h</div>
          <img className="ui avatar image" src="https://adorbs-as-a-service.herokuapp.com/api/v1/50w/50h/" /> Elliot
        </div>
        <div className="image">
          <img src="https://adorbs-as-a-service.herokuapp.com/api/v1/400w/400h/" />
        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            17 likes
          </span>
          <i className="comment icon"></i>
          3 comments
        </div>
      </div>
      </Link>
    );
  }
}

export default Post;