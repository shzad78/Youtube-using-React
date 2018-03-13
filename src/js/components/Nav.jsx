// ########## Import Dependencies here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens here ##########

// ########## Import Components here ##########
import Search from './Search';

const Nav = (props) => {
  return (
    <div className="nav">
      <Search 
        {...props}
      />
    </div>
  );
}

Nav.propTypes = {
  getVideos: PropTypes.func.isRequired,
  cbUpdateVideos: PropTypes.func.isRequired
}

export default Nav;