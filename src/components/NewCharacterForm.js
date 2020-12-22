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
      level: 1,
      maxHP: 10,
      currentHP: 10,
      maxMP: 5,
      currentMP: 5,
      maxStamina: 10,
      currentStamina: 10,
      currentLocation: {"x": 0, "y": 0, "z": 0},
      inventory: [],
      id: v4()
    });
  }
  addToInput = (valueToAdd) => {
    this.setNativeValue(this.inputElement, +this.state.inputValue + +valueToAdd);
    this.inputElement.dispatchEvent(new Event('input', { bubbles: true }));
  };

  handleChange = e => {
      console.log(e);
      this.setState({ inputValue: e.target.value });
      this.props.onChange(e);
  };

  return (
    <React.Fragment>
      <h2>Make a new Character</h2>
        <form onSubmit={handleNewCharacterFormSubmission}>
          <p>Name:
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
            />
            Bonus Points: {props.bonusPoints}
          </p>
          <p>Strength:
            <button type="button" onClick={() => this.addToInput(-1)}>-</button>
            <input
              readOnly
              ref={input => {this.inputElement=input}}
              onChange={this.handleChange}
              type='number'
              name='strength'
              defaultValue={1}
              min={1}
            />
            <button type="button" onClick={() => this.addToInput(+1)}>+</button>
          </p>
          <p>Dexterity:
            <input
              type='number'
              name='dexterity'
              defaultValue={1}
              min={1}
            />
          </p>
          <p>Intelligence:
            <input
              type='number'
              name='intelligence'
              defaultValue={1}
              min={1}
            />
          </p>
          <p>Charisma:
            <input
              type='number'
              name='charisma'
              defaultValue={1}
              min={1}
            />
          </p>
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