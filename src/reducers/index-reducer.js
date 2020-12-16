import { combineReducers } from 'redux';
import initialStartScreenReducer from './initial-start-screen-reducer';

const rootReducer = combineReducers({
  initialScreenToShow: initialStartScreenReducer,
});

export default rootReducer;