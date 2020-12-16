import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions/index.js';

class GameControl extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <GameContent />
        <MapScreen />
        <EventsLog />
      </React.Fragment>
    );
  }
}

GameControl.propTypes = {

};

const mapStateToProps = state => {
  return {

  }
}

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;