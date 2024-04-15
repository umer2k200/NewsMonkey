import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
  constructor(props) {
    super(); //cuz its object is created 
    this.state = {
      articles : [],
      page: 1
    };
    document.title = `${props.category} - NewsMonkey`;
  }
  handlePrevClick = async () => {
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    console.log("Next");
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page+1,
      articles: parsedData.articles
    })
  }
  static defaultProps = {
    country:'pk',
    pageSize: 8,
    category: 'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center my-5'>NewsMonkey - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} publishedTime={element.publishedAt} source={element.source.name}/> 
              </div>
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-3" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button disabled={this.state.page>1} type="button" className="btn btn-dark my-3" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }
}

export default News
