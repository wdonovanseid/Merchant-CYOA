import React from "react";
import PropTypes from "prop-types";

function LevelUpForm(props) {
  function handleLevelUpFormSubmission(event) {
    event.preventDefault();
    props.onClickingLevelUp({
      name: props.playerCharacter.name,
      strength: parseInt(event.target.strength.value),
      dexterity: parseInt(event.target.dexterity.value),
      intelligence: parseInt(event.target.intelligence.value),
      charisma: parseInt(event.target.charisma.value),
      gold: props.playerCharacter.gold,
      exp: 0,
      level: props.playerCharacter.level+=1,
      maxHP: 10,
      currentHP: 10,
      maxMP: 5,
      currentMP: 5,
      maxStamina: 10,
      currentStamina: 10,
      currentLocation: props.playerCharacter.currentLocation,
      inventory: props.playerCharacter.inventory,
      id: props.playerCharacter.id
    });
  }
  return (
    <React.Fragment>
        <form onSubmit={handleLevelUpFormSubmission}>
            <p>Strength: <input
              type='number'
              name='strength'
              defaultValue={props.playerCharacter.strength}
              min={props.playerCharacter.strength} /></p>
            <p>Dexterity: <input
              type='number'
              name='dexterity'
              defaultValue={props.playerCharacter.dexterity}
              min={props.playerCharacter.dexterity} /></p>
            <p>Intelligence: <input
              type='number'
              name='intelligence'
              defaultValue={props.playerCharacter.intelligence}
              min={props.playerCharacter.intelligence} /></p>
            <p>Charisma: <input
              type='number'
              name='charisma'
              defaultValue={props.playerCharacter.charisma}
              min={props.playerCharacter.charisma} /></p>
          <button type="submit" className="btn btn-primary">Level Up!</button>
        </form>
        <button type="button" onClick={props.onClickingReturnToCharacterStats}>Return to Character Stats</button>
    </React.Fragment>
  );
}

LevelUpForm.propTypes = {
  playerCharacter: PropTypes.object,
  onClickingLevelUp: PropTypes.func,
  onClickingReturnToCharacterStats: PropTypes.func
};

export default LevelUpForm;