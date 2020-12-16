import React from "react";
import PropTypes from "prop-types";

function CharacterStatsScreen(props) {
  const { name, strength, dexterity, intelligence, charisma, gold, exp, maxHP, currentHP, maxMP, currentMP, maxStamina, currentStamina } = props.playerCharacter;
  return (
    <React.Fragment>
        <h4>{name}</h4>
        <h4>Level: 1  EXP: {exp}</h4>
        <h5>Gold: {gold}g</h5>
        <h5>HP: {currentHP}/{maxHP}</h5>
        <h5>MP: {currentMP}/{maxMP}</h5>
        <h5>Stamina: {currentStamina}/{maxStamina}</h5>
        <ul>
          <li>Strength: {strength}</li>
          <li>Dexterity: {dexterity}</li>
          <li>Intelligence: {intelligence}</li>
          <li>Charisma: {charisma}</li>
        </ul>
        <hr />
        <button onClick={props.onClickingReturn}>Return</button>
    </React.Fragment >
  );
}

CharacterStatsScreen.propTypes = {
  playerCharacter: PropTypes.object
};

export default CharacterStatsScreen;