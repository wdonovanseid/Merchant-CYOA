import * as c from '../actions/ActionTypes';

export default (state = "locationInfo", action) => {
  switch (action.type) {
    case c.SHOW_CHARACTER_INFO:
      const newState = "checkCharacter";
      return newState;
    case c.SHOW_INVENTORY:
      const newState2 = "checkInventory";
      return newState2;
    case c.SHOW_LEVEL_UP_FORM:
      const newState3 = "levelUp";
      return newState3;
    case c.SHOW_BATTLE_SCREEN:
      const newState4 = "inBattle";
      return newState4;
    case c.SHOW_CURRENT_LOCATION:
      const newState5 = "locationInfo";
      return newState5;
    case c.SHOW_SECONDARY_SAVED_GAMES:
      const newState6 = "savedGames";
      return newState6;
    default:
      return state;
    }
};