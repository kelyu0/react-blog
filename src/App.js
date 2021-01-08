import "nprogress/nprogress.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import "./css/fonts.css";
import "./css/index.css";
// import "./css/layout.css";
import "./css/list.css";
import "./css/post.css";
import "./css/reset.css";
import About from "./view/About.js";
import PostContent from "./view/PostContent.js";
import Posts from "./view/Posts.js";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <Link to="/">Posts</Link>
            <span> | </span>
            <Link to="/about">About</Link>
          </div>
          <Route path="/posts/:id" component={PostContent} />
          <Route exact path="/" component={Posts} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
