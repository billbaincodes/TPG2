import React from "react";

const Post = ({ postData, deletePost }) => (



  <div className="post">
    <div className="post-top">
      <div className="post-header">
        <img className="post-avatar" src={postData.avatarURL} alt="avatar" />
        <div className="post-username">{postData.handle}</div>
      </div>
      <a onClick={() => deletePost(postData.post_id, postData.character_id)} className="post-options">
          <i aria-hidden="true" class="remove circle icon" />
        </a>
    </div>
    <img className="post-image" src={postData.imageURL} alt="post" />

    <div className="post-bottom">
      <div className="post-metadata">
        <div className="post-title">{postData.title}</div>
      </div>
      <div className="post-body">
        <p>{postData.body}</p>
      </div>
    </div>
  </div>
);

export default Post;
