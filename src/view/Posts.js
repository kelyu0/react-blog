import React, { Component } from "react";
import Post from "./Post.js";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  resolveId(location) {
    return parseInt(location.pathname.split("/").pop());
  }

  fetchData() {
    fetch("https://api.github.com/repos/kelyu0/articles/issues")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const posts = data
          .filter((item) => item.state === "open")
          .map((item) => {
            return {
              id: item.number,
              title: item.title,
              labels: item.labels.map((tag) => tag.name),
              url: item.html_url,
              date: item.created_at.substring(0, 10),
            };
          });
        this.setState({ posts: posts });
      });
  }

  componentDidMount() {
    this.id = this.resolveId(this.props.location);
    this.fetchData();
  }

  render() {
    const postItem = this.state.posts.map((post) => <Post key={post.id} post={post} />);
    return (
      <div className="list">
        <ul>{postItem}</ul>
      </div>
    );
  }
}

export default Posts;
