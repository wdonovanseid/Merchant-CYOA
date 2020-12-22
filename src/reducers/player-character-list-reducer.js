import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, strength, dexterity, intelligence, charisma, gold, exp, level, maxHP, currentHP, maxMP, currentMP, maxStamina, currentStamina, currentLocation, inventory, id } = action;
  switch (action.type) {
  case c.ADD_NEW_SAVE:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        strength: strength,
        dexterity: dexterity,
        intelligence: intelligence,
        charisma: charisma,
        gold: gold,
        exp: exp,
        level: level,
        maxHP: maxHP,
        currentHP: currentHP,
        maxMP: maxMP,
        currentMP: currentMP,
        maxStamina: maxStamina,
        currentStamina: currentStamina,
        currentLocation: currentLocation,
        inventory: inventory,
        id: id
      }
    });
  case c.DELETE_SAVE:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }  
};