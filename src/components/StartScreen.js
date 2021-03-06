import React from "react";
import PropTypes from "prop-types";

function StartScreen(props) {
  return (
    <React.Fragment>
      <h2>SPLASH</h2>
      <hr />
      <button type="button" className="btn btn-info" onClick={props.onClickingStartNewGame}>Start New Game</button>
      <button type="button" className="btn btn-info" onClick={props.onClickingShowSavedGames}>Load Game</button>
    </React.Fragment>
  );
}

StartScreen.propTypes = {
  onClickingStartNewGame: PropTypes.func,
  onClickingShowSavedGames: PropTypes.func
};

export default StartScreen;