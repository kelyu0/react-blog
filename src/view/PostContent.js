import hljs from "highlight.js";
import "highlight.js/styles/zenburn.css";
import marked from "marked";
import NProgress from "nprogress";
import React, { Component } from "react";

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

    //匹配目录
    const toc = issue.body.match(/#{1,6}\s(.+)/g);
    const tables = toc.map((item) => ({
      level: item.split("#").length - 1,
      title: item.replace(/#{1,6}/, "").trim(),
    }));

    //给html中的h加id
    let tocHtml = htmlContent.match(/<(h\d).*?>.*?<\/h\d>/g);
    tocHtml.forEach((item, index) => {
      let _toc = `<div id='${tables[index].title}'>${item} </div>`;
      htmlContent = htmlContent.replace(item, _toc);
    });

    return (
      <div>
        <div className="article-catalog">
          {tables.map(({ level, title }, index) => (
            <div key={index}>
              <a className={"article-catalog-h" + level} href={"#" + title}>
                {title}
              </a>
            </div>
          ))}
        </div>
        <a href="#top" id="gotop-btn">
          Up
        </a>
        <div className="article ">
          <h1 className="article-title">{issue.title}</h1>
          <p className="article-time">{issue.created_at.substr(0, 10)}</p>
          <div className="article-desc article-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
        <div className="article">
          <button className="article-comment" onClick={() => (window.location.href = issue.html_url)}>
            Comment
          </button>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.state.content}</div>;
  }
}

export default PostContent;
