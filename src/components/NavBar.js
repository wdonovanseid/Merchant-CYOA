import React from "react";
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <React.Fragment>
      {props.expCheck>99 && <p>LEVEL UP AVAILABLE</p>}
      <button type="button" className="btn btn-info" onClick={props.onClickingCharacterStats}>Character Stats</button>
      <button type="button" className="btn btn-primary" onClick={props.onClickingInventory}>Inventory</button>
      <button type="button" className="btn btn-info" onClick={props.onClickingShowSavedGames}>Save Game</button>
      <button type="button" className="btn btn-info" onClick={props.onClickingEndGame}>End Game</button>
      <hr />
    </React.Fragment>
  );
}

NavBar.propTypes = {
  onClickingCharacterStats: PropTypes.func,
  onClickingInventory: PropTypes.func,
  onClickingEndGame: PropTypes.func,
  onClickingShowSavedGames: PropTypes.func,
  expCheck: PropTypes.number
};

export default NavBar;