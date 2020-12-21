import React from "react";
import PropTypes from "prop-types";

function CurrentLocation(props) {
  const { locationTitle, locationDescription, locationSpecificActions, locationMovementActions } = props.locationInfo;
  return (
    <React.Fragment>
      <h2>{locationTitle}</h2>
      <p>{locationDescription}</p>
      {locationSpecificActions.map((action, index) =>
        action.eventTrigger && <button key={index} onClick={() => action.onClick(props.playerCharacter, action, props.refresh)}>{action.actionName}</button>
      )}
      <hr />
      {locationMovementActions.map((action, index) =>
        <button key={index} onClick={() => action.onClick(props.playerCharacter, props.refresh)}>{action.actionName}</button>
      )}
    </React.Fragment>
  );
}

CurrentLocation.propTypes = {
  playerCharacter: PropTypes.object,
  locationInfo: PropTypes.object,
  refresh: PropTypes.func
};

export default CurrentLocation;