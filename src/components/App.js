import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from "./../actions/index.js";
import NewCharacterForm from "./NewCharacterForm";

class App extends React.Component {

  handleCreatingNewCharacter = (newPlayerCharacter) => {
    this.props.dispatch(a.createNewPlayerCharacter(newPlayerCharacter));
    this.props.dispatch(a.selectPC(newPlayerCharacter));
    this.props.dispatch(a.startGame);
  }

  handleReturnToStart = () => {
    this.props.dispatch(a.unselectPC);
    this.props.dispatch(a.showSplashScreen);
  }

  handleShowCharacterForm = () => {
    this.props.dispatch(a.showNewCharForm);
  }

  render() {
    let currentlyVisibleStartingScreen = null;
    if (this.props.initialScreenToShow === "NEW_CHAR_FORM") {
      currentlyVisibleStartingScreen =
      <NewCharacterForm
        onNewCharacterCreation={this.handleCreatingNewCharacter}
        onClickingReturnToStart={this.handleReturnToStart}
      />
    } else if (this.props.initialScreenToShow === "START_GAME") {
      currentlyVisibleStartingScreen =
      <GameControl
        onClickingEndGame={this.handleReturnToStart}
      />
    } else {
      currentlyVisibleStartingScreen =
      <StartScreen
        onClickingStartNewGame={this.handleShowCharacterForm}
      />
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
  playerCharacterList: PropTypes.object,
  selectedPlayerCharacter: PropTypes.object
}

const mapStateToProps = state => {
  return {
    initialScreenToShow: state.initialScreenToShow,
    playerCharacterList: state.playerCharacterList,
    selectedPlayerCharacter: state.selectedPlayerCharacter
  }
}

App = connect(mapStateToProps)(App);

export default App;
