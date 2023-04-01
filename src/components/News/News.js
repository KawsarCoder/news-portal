import React, { Component } from "react";
import NewsItems from "../NewsItems/NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  // fetch all news data
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=87e145ee21b44cde98aec3b98deebcc1&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=87e145ee21b44cde98aec3b98deebcc1&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=87e145ee21b44cde98aec3b98deebcc1&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    console.log(this.state.articles);
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsPortal - Top Headlines</h1>
        {/* loading spinner start */}
        {this.state.articles.length < 1 ? (
          <div className="d-flex justify-content-center mt-5">
            <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-info" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* loading spinner end  */}
        <div className="row">
          {this.state.articles.map((el) => {
            return (
              <div className="col-md-4" key={el.url}>
                <NewsItems
                  title={
                    el.title ? el.title.slice(0, 30) : "not mention author name"
                  }
                  description={
                    el.description
                      ? el.description.slice(0, 90)
                      : "Business refers to an enterprising entity or organization that carries out professional activities."
                  }
                  newsUrl={el.url}
                  imgUrl={
                    el.urlToImage
                      ? el.urlToImage
                      : "https://www.incimages.com/uploaded_files/image/1920x1080/getty_180152187_970679970450042_64007.jpg"
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-outline-primary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={this.state.page > 4}
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
