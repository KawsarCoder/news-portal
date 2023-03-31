import React, { Component } from "react";
import NewsItems from "../NewsItems/NewsItems";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsPortal - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItems title="title" description="mydec" />
          </div>

          <div className="col-md-4">
            <NewsItems title="title" description="mydec" />
          </div>

          <div className="col-md-4">
            <NewsItems title="title" description="mydec" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
