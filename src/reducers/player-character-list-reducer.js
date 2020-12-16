import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, strength, dexterity, intelligence, charisma, gold, exp, maxHP, currentHP, maxMP, currentMP, maxStamina, currentStamina, currentLocation, id } = action;
  switch (action.type) {
  case c.ADD_PLAYER_CHARACTER:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        strength: strength,
        dexterity: dexterity,
        intelligence: intelligence,
        charisma: charisma,
        gold: gold,
        exp: exp,
        maxHP: maxHP,
        currentHP: currentHP,
        maxMP: maxMP,
        currentMP: currentMP,
        maxStamina: maxStamina,
        currentStamina: currentStamina,
        currentLocation: currentLocation,
        id: id
      }
    });
  case c.DELETE_PLAYER_CHARACTER:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }  
};