import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, publisher, source } = this.props;

    return (
      <div className="my-3">
        <div className="card mx-3" >
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          <span> {source} </span>
        </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {description}...</p>
            <p className="card-text"><small className="text-muted">By {author} at {new Date(publisher).toGMTString()}</small></p>
            <div className="text-center">
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm"> Read More </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
