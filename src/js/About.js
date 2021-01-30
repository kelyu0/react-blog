import React, { Component } from "react";
import { config } from "../config";
class About extends Component {
  render() {
    return (
      <div className="article">
        <h3>Contact me from </h3>
        <ul>
          {config.thirdPartySite.map((site, index) => (
            <li key={index}>
              <a href={site.href}>{site.title}</a>
            </li>
          ))}
        </ul>
        <br />

        <h3>Blog Theme</h3>
        {/* <br /> */}

        <h4>code</h4>
        <div>
          <a href={config.porject.vueIssueBlog.code}> vue-issue-blog</a>
          <br />
          <a href={config.porject.reactIssueBlog.code}> react-issue-blog</a>
        </div>
        {/* <br /> */}
        <h4>demo</h4>
        <div>
          <a href={config.porject.vueIssueBlog.demo}> Version Vue </a>
          <br />
          <a href={config.porject.reactIssueBlog.demo}> Version React </a>
        </div>
      </div>
    );
  }
}
export default About;
