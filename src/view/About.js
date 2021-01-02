import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="article">
        <div>Contact me from :</div>
        <br />
        <ul>
          <li>
            <a href="mailto:kelyu0109@gmail.com"> kelyu0109@gmail.com </a>
          </li>

          <li>
            <a href="https://github.com/kelyu0">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ke-lyu-638bb8141/"> Linkedin </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default About;
