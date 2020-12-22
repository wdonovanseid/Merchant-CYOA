import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from "./../actions/index.js";
import NewCharacterForm from "./NewCharacterForm";
import StartScreen from "./StartScreen";
import GameControl from "./GameControl";
import InitialSavedGamesScreen from "./InitialSavedGamesScreen";

class App extends React.Component {

  handleCreatingNewCharacter = (newPlayerCharacter) => {
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

  handleShowSavedGames = () => {
    this.props.dispatch(a.showSavedGames);
  }

  handleLoadGame = (id) => {
    const save = this.props.playerCharacterList[id];
    this.props.dispatch(a.selectPC(save));
    this.props.dispatch(a.startGame);
    this.props.dispatch(a.showCurrentLocation);
  }

  handleDeleteGame = (id) => {
    this.props.dispatch(a.deleteSave(id));
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
      <GameControl />
    } else if (this.props.initialScreenToShow === "SHOW_SAVED_GAMES") {
      currentlyVisibleStartingScreen =
      <InitialSavedGamesScreen 
        savedGames={this.props.playerCharacterList}
        onClickingReturn={this.handleReturnToStart}
        onClickingLoadGame={this.handleLoadGame}
        onClickingDeleteGame={this.handleDeleteGame}
      />
    } else {
      currentlyVisibleStartingScreen =
      <StartScreen
        onClickingStartNewGame={this.handleShowCharacterForm}
        onClickingShowSavedGames={this.handleShowSavedGames}
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
  selectedPlayerCharacter: PropTypes.object,
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