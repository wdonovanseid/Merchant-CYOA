import { combineReducers } from 'redux';
import initialStartScreenReducer from './initial-start-screen-reducer';
import playerCharacterListReducer from './player-character-list-reducer';
import selectedPlayerCharacterReducer from './select-player-character-reducer';
import currentGameContentScreenReducer from './current-game-content-screen-reducer';

const rootReducer = combineReducers({
  initialScreenToShow: initialStartScreenReducer,
  playerCharacterList: playerCharacterListReducer,
  selectedPlayerCharacter: selectedPlayerCharacterReducer,
  currentGameContentScreen: currentGameContentScreenReducer
});

export default rootReducer;