import React from "react";
import PropTypes from "prop-types";

function EventsLog(props) {
  return (
    <React.Fragment>
      <div id="event-log">
        {}
      </div>
    </React.Fragment>
  );
}

EventsLog.propTypes = {
  events: PropTypes.string
};

export default EventsLog;