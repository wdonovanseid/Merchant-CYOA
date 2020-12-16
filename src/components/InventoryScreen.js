import React from "react";
import PropTypes from "prop-types";

function InventoryScreen(props) {
  let currentInventory;
  if (props.inventory.length < 1) {
    currentInventory =
    <p>You have nothing in your inventory</p>
  } else {
    currentInventory =
    <ul>
      {props.inventory.map((item) => {
        {console.log(item)}
        <li>{item.itemName} {item["consume"] ? <button onClick={item.useItem}>Use</button> : ""}</li>
      })}
    </ul>
  }
  return (
    <React.Fragment>
        <h4>Inventory</h4>
        {currentInventory}
        <hr />
        <button onClick={props.onClickingReturn}>Return</button>
    </React.Fragment >
  );
}

InventoryScreen.propTypes = {
  inventory: PropTypes.array
};

export default InventoryScreen;