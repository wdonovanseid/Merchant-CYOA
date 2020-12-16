import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from "./../actions/index.js";
import NewCharacterForm from "./NewCharacterForm";

class App extends React.Component {

  handleCreatingNewCharacter = (newPlayerCharacter) => {
    this.props.dispatch(a.createNewPlayerCharacter(newPlayerCharacter));
    this.props.dispatch(a.startGame);
  }

  handleReturnToStart = () => {
    this.props.dispatch(a.showSplashScreen);
  }

  render() {
    let currentlyVisibleStartingScreen = null;
    if (this.props.initialScreenToShow === "NEW_CHAR_FORM") {
      currentlyVisibleStartingScreen =
      <NewCharacterForm 
        onNewCharacterCreation={this.handleCreatingNewCharacter}
        returnToStart={this.handleReturnToStart}
      />
    } else if (this.props.initialScreenToShow === "START_GAME") {
      currentlyVisibleStartingScreen =
      <GameControl 
        playerCharacter={this.props.playerCharacter}
        endGame={this.handleReturnToStart}
      />
    } else {
      currentlyVisibleStartingScreen =
      <StartScreen />
    }
    return (
      <React.Fragment>
        {currentlyVisibleStartingScreen}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  initialScreenToShow: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    initialScreenToShow: state.initialScreenToShow
  }
}

App = connect(mapStateToProps)(App);

export default App;
