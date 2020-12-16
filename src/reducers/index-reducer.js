import { combineReducers } from 'redux';
import initialStartScreenReducer from './initial-start-screen-reducer';
import playerCharacterListReducer from './player-character-list-reducer';
import selectedPlayerCharacterReducer from './select-player-character-reducer';

const rootReducer = combineReducers({
  initialScreenToShow: initialStartScreenReducer,
  playerCharacterList: playerCharacterListReducer,
  selectedPlayerCharacter: selectedPlayerCharacterReducer
});

export default rootReducer;