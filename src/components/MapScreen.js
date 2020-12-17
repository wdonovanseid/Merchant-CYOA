import React from "react";
import PropTypes from "prop-types";

function MapScreen(props) {
  return (
    <React.Fragment>
      <img src={props.mapIcon} height={300} width={300} />
    </React.Fragment>
  );
}

MapScreen.propTypes = {
  mapIcon: PropTypes.string
};

export default MapScreen;