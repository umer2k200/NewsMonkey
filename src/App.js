import './App.css';
//Class based component
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" country="pk" category="general" />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" country="pk" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" country="pk" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" country="pk" category="general" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" country="pk" category="health" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" country="pk" category="science" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" country="pk" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" country="pk" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
