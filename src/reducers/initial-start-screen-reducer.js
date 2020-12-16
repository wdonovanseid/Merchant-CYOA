import * as c from '../actions/ActionTypes';

export default (state = "SPLASH_SCREEN", action) => {
  switch (action.type) {
    case c.SHOW_NEW_CHARACTER_FORM:
      const newState = "NEW_CHAR_FORM";
      return newState;
    case c.SHOW_GAME_CONTROL:
      const newState2 = "START_GAME";
      return newState2;
    case c.SHOW_SPLASH_SCREEN:
      const newState3 = "SPLASH_SCREEN";
      return newState3;
    default:
      return state;
    }
};