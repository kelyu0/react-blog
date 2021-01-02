import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/post.css";

class Post extends Component {
  render() {
    const post = this.props.post;
    let labels = post.labels.map((label) => (
      <span key={label} className="list-label">
        {label}
      </span>
    ));
    let path = "/posts/" + post.id;
    return (
      <li className="list-post">
        <Link to={{ pathname: path }}>{post.title}</Link> {labels}
        <span className="date-long">{post.date}</span>
      </li>
    );
  }
}

export default Post;
