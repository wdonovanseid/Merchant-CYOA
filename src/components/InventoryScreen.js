import React from "react";
import PropTypes from "prop-types";

function InventoryScreen(props) {
  let currentInventory;
  if (props.playerCharacter.inventory.length < 1) {
    currentInventory =
    <p>You have nothing in your inventory</p>
  } else {
    currentInventory =
    <ul>
      {props.playerCharacter.inventory.map((item, index) => 
        <li key={index}>{item.itemName} {item.consume && <button onClick={() => item.onUse(props.playerCharacter, item)}>Use</button>}</li>
      )}
    </ul>
  }
  return (
    <React.Fragment>
        <h4>Inventory</h4>
        {currentInventory}
        <button onClick={props.onClickingReturn}>Return</button>
    </React.Fragment>
  );
}

InventoryScreen.propTypes = {
  playerCharacter: PropTypes.object
};

export default InventoryScreen;