import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewCharacterForm(props) {
  function handleNewCharacterFormSubmission(event) {
    event.preventDefault();
    props.onNewCharacterCreation({
      name: event.target.name.value,
      strength: parseInt(event.target.strength.value),
      dexterity: parseInt(event.target.dexterity.value),
      intelligence: parseInt(event.target.intelligence.value),
      charisma: parseInt(event.target.charisma.value),
      gold: 100,
      exp: 0,
      maxHP: 10,
      currentHP: 10,
      maxMP: 5,
      currentMP: 5,
      maxStamina: 10,
      currentStamina: 10,
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
            <p>Strength: <input
              type='number'
              name='strength'
              defaultValue={1} /></p>
            <p>Dexterity: <input
              type='number'
              name='dexterity'
              defaultValue={1} /></p>
            <p>Intelligence: <input
              type='number'
              name='intelligence'
              defaultValue={1} /></p>
            <p>Charisma: <input
              type='number'
              name='charisma'
              defaultValue={1} /></p>
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