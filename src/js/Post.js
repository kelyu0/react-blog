import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    const post = this.props.post;
    let labels = post.labels.map((label) => (
      <span key={label} className="list-label">
        {label}
      </span>
    ));
    let path = "/post/" + post.id;
    return (
      <li className="list-post">
        <div>
          <Link to={{ pathname: path }}>{post.title}</Link>
        </div>
        <span className="date-long">{post.date}</span>
        {labels}
      </li>
    );
  }
}

export default Post;
