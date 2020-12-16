import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, id } = action;
  switch (action.type) {
  case c.ADD_PLAYER_CHARACTER:
    return Object.assign({}, state, {
      [id]: {
        name: name,
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