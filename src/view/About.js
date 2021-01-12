import React, { Component } from "react";
import { config } from "../config";
class About extends Component {
  render() {
    return (
      <div className="article">
        <div>Contact me from :</div>
        <br />
        <ul>
          {config.thirdPartySite.map((site, index) => (
            <li key={index}>
              <a href={site.href}>{site.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default About;
