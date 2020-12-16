import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewCharacterForm(props) {
  function handleNewCharacterFormSubmission(event) {
    event.preventDefault();
    props.onNewCharacterCreation({
      name: event.target.name.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
        <form onSubmit={handleNewCharacterFormSubmission}>
            <p>Name: <input
              type='text'
              name='name'
              placeholder='Name'
              required /></p>
          <button type="submit" className="btn btn-primary">Start Game</button>
        </form>
        <button type="button" onClick={props.onClickingReturnToStart}>Return to Start Screen</button>
    </React.Fragment>
  );
}

NewCharacterForm.propTypes = {
  onNewCharacterCreation: PropTypes.func,
  onClickingReturnToStart: PropTypes.func
};

export default NewCharacterForm;