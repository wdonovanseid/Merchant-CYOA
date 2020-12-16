import * as c from './ActionTypes';

export const startGame = ({
  type: c.SHOW_GAME_CONTROL
});

export const showSplashScreen = ({
  type: c.SHOW_SPLASH_SCREEN
});

export const showNewCharForm = ({
  type: c.SHOW_NEW_CHARACTER_FORM
});

export const createNewPlayerCharacter = playerCharacter => {
  const {name, id} = playerCharacter;
  return {
    type: c.ADD_PLAYER_CHARACTER,
    name: name,
    id: id
  }
};

export const deletePlayerCharacter = id => ({
  type: c.DELETE_PLAYER_CHARACTER,
  id
});