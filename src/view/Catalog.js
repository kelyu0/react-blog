import React, { Component } from "react";

export default class Catalog extends Component {
  render() {
    const mdContent = this.props.mdContent;
    let htmlContent = this.props.htmlContent;

    const toc = mdContent.match(/#{1,6}\s(.+)/g);
    if (!toc) return null;
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
      <aside className="catalog-container">
        {tables.map(({ level, title }, index) => (
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
