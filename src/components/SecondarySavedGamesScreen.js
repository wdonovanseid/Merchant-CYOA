import React from "react";
import PropTypes from "prop-types";

function SecondarySavedGamesScreen(props) {
  let currentSaves;
  if (Object.values(props.savedGames).length < 1) {
    currentSaves =
    <p>You have no saves</p>
  } else {
    currentSaves =
    <ul>
      {Object.values(props.savedGames).map((save, index) => 
        <li key={index}>
          {save.name} LVL: {save.level}
          <button onClick={() => props.onClickingLoadGame(save.id)}>Load Game</button>
          <button onClick={() => props.onClickingOverwriteSave(props.player)}>Overwrite Save</button>
          <button onClick={() => props.onClickingDeleteGame(save.id)}>Delete Game</button>
        </li>
      )}
    </ul>
  }
  return (
    <React.Fragment>
        <h4>Saves</h4>
        {currentSaves}
        <button onClick={() => props.onClickingNewSave(props.player)}>New Save Game</button>
        <button onClick={props.onClickingReturn}>Return</button>
    </React.Fragment>
  );
}

SecondarySavedGamesScreen.propTypes = {
  player: PropTypes.object,
  savedGames: PropTypes.object,
  onClickingReturn: PropTypes.func,
  onClickingLoadGame: PropTypes.func,
  onClickingDeleteGame: PropTypes.func,
  onClickingNewSave: PropTypes.func,
  onClickingOverwriteSave: PropTypes.func
};

export default SecondarySavedGamesScreen;