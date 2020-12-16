import React from "react";
import PropTypes from "prop-types";

function CurrentLocation(props) {
  const { locationTitle, locationDescription, locationSpecificActions, locationMovementActions } = props.locationInfo;
  return (
    <React.Fragment>
      <h2>{locationTitle}</h2>
      <p>{locationDescription}</p>
      {locationSpecificActions.map((action, index) =>
        <button key={index} onClick={() => action.onClick(props.playerCharacter)}>{action.actionName}</button>
      )}
      {locationMovementActions.map((action, index) =>
        <button key={index} onClick={() => action.onClick(props.playerCharacter)}>{action.actionName}</button>
      )}
    </React.Fragment>
  );
}

CurrentLocation.propTypes = {
  playerCharacter: PropTypes.object,
  locationInfo: PropTypes.object
};

export default CurrentLocation;