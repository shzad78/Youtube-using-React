// ########## Import Dependencies here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens here ##########

// ########## Import Components here ##########
import VideoListEntry from './VideoListEntry';

export default class VideoList extends Component {

  createList() {
    return this.props.videoList.map((item, i) => {
      return <VideoListEntry key={i} video={item} {...this.props} />
    });
  }

  render() {
    let { videoList } = this.props;
    return (
      <div className="video-list">
        {this.createList()}
      </div>
    );
  }
}

VideoList.propTypes = {
  videoList: PropTypes.array.isRequired,
  handleSelectedVideo: PropTypes.func.isRequired
}