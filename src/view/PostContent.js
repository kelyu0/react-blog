import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
import marked from "marked";
import React, { Component } from "react";
import "../css/post.css";
import "../css/zenburn.css";

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

    fetch(`https://api.github.com/repos/kelyu0/articles/issues/${id}`)
      .then((resp) => resp.json())
      .then((issue) => {
        const toc = issue.body.match(/#{1,6}\s(.+)/g);
        const title = toc.map((item) => item.replace(/#{1,6}/g, ""));
        let htmlContent = marked(issue.body);
        const div = (
          <div>
            <div className="article">
              <h1 className="article-title">{issue.title}</h1>
              <p className="article-time">{issue.created_at.substr(0, 10)}</p>
              {title.map((item) => (
                <p key={item}>{item}</p>
              ))}
              <div className="article-desc article-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
            <div className="article">
              <button className="article-comment" onClick={() => (window.location.href = issue.html_url)}>
                Comment
              </button>
            </div>
          </div>
        );
        this.setState({ content: div });
      });
  }

  render() {
    return (
      <div>
        <a href="#gotop" id="gotop">
          Go top
        </a>
        {this.state.content}
      </div>
    );
  }
}

export default PostContent;
