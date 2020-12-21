import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
  case c.REFRESH:
    return !state;
  default:
    return state;
  }
};