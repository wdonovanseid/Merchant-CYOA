import React from "react";
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <React.Fragment>
      <button type="button" className="btn btn-info" onClick={props.onClickingCharacterStats}>Character Stats</button>
      <button type="button" className="btn btn-primary" onClick={props.onClickingInventory}>Inventory</button>
      {/* <button type="button" className="btn btn-info" onClick={props.onClickingEndGame}>End Game</button> */}
      <hr />
    </React.Fragment>
  );
}

NavBar.propTypes = {
  onClickingCharacterStats: PropTypes.func,
  onClickingInventory: PropTypes.func,
};

export default NavBar;