import React, { Component } from "react";

export default class Catalog extends Component {
  render() {
    return (
      <aside className="catalog-container">
        {this.props.tables.map(({ level, title }, index) => (
          <div key={index}>
            <a className={"article-catalog-h" + level} href={"#" + title}>
              {title}
            </a>
          </div>
        ))}
      </aside>
    );
  }
}
