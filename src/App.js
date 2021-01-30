import "nprogress/nprogress.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { config } from "./config";
import "./css/index.css";
import "./css/list.css";
import "./css/post.css";
import "./css/reset.css";
import About from "./js/About.js";
import PostContent from "./js/PostContent.js";
import Posts from "./js/Posts.js";

export default class App extends Component {
  render() {
    return (
      <Router basename="/react-issue-blog">
        <div>
          <div className="navbar">
            <Link to="/">Posts</Link>
            <span> | </span>
            <Link to="/about">About</Link>
            <span> | </span>
            <a href={config.porject.vueIssueBlog.demo}>Version Vue</a>
          </div>
          <Route path="/post/:id" component={PostContent} />
          {/* <Redirect from="posts/:id" to="/posts/:id" /> */}
          <Route exact path="/" component={Posts} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
