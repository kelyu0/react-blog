import NProgress from "nprogress";
import React, { Component } from "react";
import { config } from "../config";
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
    const url = `https://api.github.com/repos/${config.githubUserName}/${config.githubRepo}/issues`;
    fetch(url)
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
    NProgress.start();
    this.fetchData();
    NProgress.done();
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
