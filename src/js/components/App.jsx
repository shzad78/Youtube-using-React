// ########## Import Dependencies here ##########
import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

// ########## Import Screens here ##########

// ########## Import Components here ##########
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { YOUTUBE_KEY } from '../config/youtubekey';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      videoList: [],
      selectedVideo: {}
    }

    this.handleSelectedVideo = this.handleSelectedVideo.bind(this);
    this.getVideos = this.getVideos.bind(this);
    this.cbGetVideos = this.cbGetVideos.bind(this);
    this.cbUpdateVideos = this.cbUpdateVideos.bind(this);
  }

  getVideos(query, cb) {
    const fixed = 'https://www.googleapis.com/youtube/v3/search';
    let url = fixed + '?part=snippet' + '&maxResults=5' + '&q=' + query + '&key=' + YOUTUBE_KEY;
    axios.get(url).then(cb);
  }

  cbGetVideos(data) {
    console.log('data', data);
    this.setState({
      videoList: data.data.items,
      selectedVideo: data.data.items[0]
    })
  }

  cbUpdateVideos(data) {
    this.setState({
      videoList: data.data.items
    })
  }

  handleSelectedVideo(video) {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    let { selectedVideo, videoList } = this.state;
    return (
      <Router>
        <div className="app">
          <ul>
            <li><Link to="/">List</Link></li>
          </ul>
          <Route
            exact path="/"
            render={routeProps => (
              <div>
                <Nav
                  getVideos={this.getVideos}
                  cbUpdateVideos={this.cbUpdateVideos}
                  {...routeProps}
                />
                <div className="col-md-10 col-md-offset-1">
                  <VideoList
                    videoList={videoList}
                    handleSelectedVideo={this.handleSelectedVideo}
                    {...routeProps}
                  />
                </div>
              </div>
            )}
          />
          <Route
            path="/player/:id"
            render={routeProps => {
              console.log('player id entered');
              return (
                <div className="col-md-8 col-md-offset-2">
                  <VideoPlayer
                    selectedVideo={selectedVideo}
                    getVideos={this.getVideos}
                    cbGetVideos={this.cbGetVideos}
                    {...routeProps}
                  />
                </div>
              )
            }}
          />
        </div>
      </Router>
    );
  }

  componentDidMount() {
    this.getVideos('javascript', this.cbGetVideos);
  }

}