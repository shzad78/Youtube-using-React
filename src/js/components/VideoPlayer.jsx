// ########## Import Dependencies here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens here ##########

// ########## Import Components here ##########

const VideoPlayer = ({ selectedVideo, match, getVideos, cbGetVideos }) => {
  if(Object.keys(selectedVideo).length) {
    var selectedVideoURL = "https://www.youtube.com/embed/" + selectedVideo.id.videoId
  } else if(match.params.id) {
    getVideos(match.params.id, cbGetVideos);
  }
  return (
    <div className="video-player">
      <div className="player embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={selectedVideoURL}
          allowFullScreen
        />
      </div>
      <div className="video-details">
        <h4 className="video-title">
          {Object.keys(selectedVideo).length ? selectedVideo.snippet.title : ""}
        </h4>
        <hr />
        <p className="video-description">
          {Object.keys(selectedVideo).length ? selectedVideo.snippet.description : ""}
        </p>
      </div>
    </div>
  );
}

VideoPlayer.propTypes = {
  selectedVideo: PropTypes.object.isRequired
}

export default VideoPlayer;