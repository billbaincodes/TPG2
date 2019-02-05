import React from "react";
import { Comment } from "semantic-ui-react";

const Post = ({ postData }) => (
  <div className="post">
    <div className="post-header">
      <img className="post-avatar" src={postData.avatarURL} alt="avatar" />
      <div className="post-username">{postData.handle}</div>
    </div>
    <img className="post-image" src={postData.imageURL} alt="post" />
    <div className="post-metadata">
      <div className="post-title">{postData.title}</div>
      <a>
        <i aria-hidden="true" class="heart icon" />
        22 Likes
      </a>
    </div>
    <div className="post-body">
      <p>{postData.body}</p>
    </div>
  </div>
);

export default Post;
