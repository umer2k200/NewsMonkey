import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let {title, description, imgurl, newsUrl, author, publishedTime, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imgurl?"https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png":imgurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>Source: {source}</small></p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(publishedTime).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
