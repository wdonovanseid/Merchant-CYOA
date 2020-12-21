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

export const showSavedGames =({
  type: c.SHOW_SAVED_GAMES
});

export const createNewPlayerCharacter = playerCharacter => {
  const {name, id} = playerCharacter;
  return {
    type: c.ADD_PLAYER_CHARACTER,
    name: name,
    id: id
  }
};

export const deletePlayerCharacter = (id) => ({
  type: c.DELETE_PLAYER_CHARACTER,
  id
});

export const selectPC = (pc) => ({
  type: c.SELECT_PLAYER_CHARACTER,
  selectedPlayerCharacter: pc
});

export const unselectPC = ({
  type: c.UNSELECT_PLAYER_CHARACTER
});

export const showCharacterStats = ({
  type: c.SHOW_CHARACTER_INFO
});

export const showCharacterInventory = ({
  type: c.SHOW_INVENTORY
});

export const showLevelUpForm = ({
  type: c.SHOW_LEVEL_UP_FORM
});

export const showBattleScreen = ({
  type: c.SHOW_BATTLE_SCREEN
});

export const showCurrentLocation = ({
  type: c.SHOW_CURRENT_LOCATION
});

export const refresh = ({
  type: c.REFRESH
});