import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/tech/img/2023/03/27/1600x900/penfer-hTck7keIHK4-unsplash_1675768331999_1679889119528_1679889119528.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ....</p>
            <a href={newsUrl} rel="noreferrer" target={"_blank"} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default NewsItem;
