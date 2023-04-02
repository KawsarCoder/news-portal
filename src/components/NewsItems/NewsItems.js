import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;

    return (
      // news card
      <div className="my-3">
        <div className="card ">
          <div
            className="d-flex justify-content-end"
            style={{ position: "absolute", right: "0" }}
          >
            {" "}
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://www.incimages.com/uploaded_files/image/1920x1080/getty_180152187_970679970450042_64007.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title.slice(0, 30) : "not mention author name"}...
            </h5>
            <p className="card-text">
              {description
                ? description
                : "Business refers to an enterprising entity or organization that carries out professional activities."}
              ...
            </p>
            <span className="d-block mb-4">
              By {author ? author : "unknown"} on {new Date(date).toUTCString()}
            </span>
            <a
              rel="noreferrer"
              href={newsUrl ? newsUrl : "/"}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
