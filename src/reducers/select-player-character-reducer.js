import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedPlayerCharacter } = action;
  switch (action.type) {
  case c.SELECT_PLAYER_CHARACTER:
    const newState = selectedPlayerCharacter;
    return newState;
  case c.UNSELECT_PLAYER_CHARACTER:
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};