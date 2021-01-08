import hljs from "highlight.js";
import "highlight.js/styles/zenburn.css";
import marked from "marked";
import NProgress from "nprogress";
import React, { Component } from "react";
import Catalog from "./Catalog";

class PostContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    const id = path.split("/").pop();

    marked.setOptions({
      highlight: (code) => hljs.highlightAuto(code).value,
    });

    NProgress.start();
    fetch(`https://api.github.com/repos/kelyu0/articles/issues/${id}`)
      .then((resp) => resp.json())
      .then((issue) => {
        const content = this.renderContent(issue);
        this.setState({ content: content });
      });
    NProgress.done();
  }

  renderContent(issue) {
    let htmlContent = marked(issue.body);

    return (
      <div className="content-layout">
        <Catalog mdContent={issue.body} htmlContent={htmlContent}></Catalog>
        <div className="main-container">
          <a href="#top" id="gotop-btn">
            Up
          </a>
          <div className="article">
            <article className="article ">
              <h1 className="article-title">{issue.title}</h1>
              <p className="article-time">{issue.created_at.substr(0, 10)}</p>
              <div className="article-desc article-content" dangerouslySetInnerHTML={{ __html: marked(issue.body) }} />
            </article>
            <div className="article">
              <button className="article-comment" onClick={() => (window.location.href = issue.html_url)}>
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.state.content}</div>;
  }
}

export default PostContent;
