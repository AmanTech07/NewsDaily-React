import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export class News extends Component {
  static defaultProp = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }

  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1             //Making page object in our this.state class
    };
  }

  async updatePages() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0766139a1c94f24ba5c927a553d93f1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,            //For taking articles from our data 
      totalResults: parsedData.totalResults,     //For taking total results from our data
      loading: false
    });
  }
  
  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0766139a1c94f24ba5c927a553d93f1&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,            //For taking articles from our data 
    //   totalResults: parsedData.totalResults,     //For taking total results from our data
    //   loading: false
    // });
    this.updatePages();
    console.log(this.state.page)
  }
  
  handlePrevClick = async() => {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0766139a1c94f24ba5c927a553d93f1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
      //   page: this.state.page - 1,
      //   articles: parsedData.articles,
      //   loading: false
      // })
      // this.setState({page: this.state.page-1})
    this.setState({page: this.state.page-1})
    this.updatePages();
    console.log(this.state.page)
    
  }
  
  handleNextClick = async() => {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0766139a1c94f24ba5c927a553d93f1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
      //   page: this.state.page + 1,
      //   articles: parsedData.articles,
      //   loading: false
      // })
      // this.setState({page: this.state.page+1})
    this.setState({page: this.state.page+1})
    this.updatePages();
    console.log(this.state.page)
  }
  
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center py-3" style={{textDecoration: "underline"}}>NewsDaily - Top Headlines</h2>
        {(this.state.loading) && <Spinner/>}
        <div className="row">
            {!(this.state.loading) && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description.slice(0,90):""}
                  imageUrl={element.urlToImage?element.urlToImage:"https://static01.nyt.com/images/2021/12/22/opinion/22argument-image/22argument-image-facebookJumbo.jpg"}
                  source={element.source.name?element.source.name:"Online Source"}
                  author={element.author?element.author:"Unknown"}
                  publisher={element.publishedAt?element.publishedAt:"00:00"}
                  newsUrl={element.url}
                />
            </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    );
  }
}

export default News;
