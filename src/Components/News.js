import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello i am a constructor from news component");
    this.state = {
      page:1,
      articles: [],
      loading: false,
    };
  }

  //lifecycle method - componentdidmount , render ke baad run hoga, aur isme hum apna api url dalenge aur fetch api ka use krenge
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=78a76ccaf8064932b254ad13a02c420e&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
       articles: parsedData.articles,
      totalResults : parsedData.totalResults
      });
  }

  handlePrevClick = async() =>{
    console.log("Prev");
    
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=78a76ccaf8064932b254ad13a02c420e&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState(({
      page: this.state.page -1,
      articles: parsedData.articles
    }))
  }
  handleNextClick = async() =>{
    console.log("next");

    if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){

    }
else{
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=78a76ccaf8064932b254ad13a02c420e&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState(({
      page: this.state.page +1,
      articles: parsedData.articles
    }))
  }
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 44) : ""}
                  description={
                    element.description ? element.description.slice(0, 76) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
