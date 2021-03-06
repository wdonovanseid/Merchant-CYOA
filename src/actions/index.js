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

export const createNewSave = playerCharacter => {
  const { name, strength, dexterity, intelligence, charisma, gold, exp, level, maxHP, currentHP, maxMP, currentMP, maxStamina, currentStamina, currentLocation, inventory, id } = playerCharacter;
  return {
    type: c.ADD_NEW_SAVE,
    name: name,
    strength: strength,
    dexterity: dexterity,
    intelligence: intelligence,
    charisma: charisma,
    gold: gold,
    exp: exp,
    level: level,
    maxHP: maxHP,
    currentHP: currentHP,
    maxMP: maxMP,
    currentMP: currentMP,
    maxStamina: maxStamina,
    currentStamina: currentStamina,
    currentLocation: currentLocation,
    inventory: inventory,
    id: id
  }
};

// export const updateSave = (playerCharacter) => {
//   const { name, strength, dexterity, intelligence, charisma, gold, exp, level, maxHP, currentHP, maxMP, currentMP, maxStamina, currentStamina, currentLocation, inventory, id } = playerCharacter;
//   return {
//     type: c.UPDATE_SAVE,
//     name: name,
//     strength: strength,
//     dexterity: dexterity,
//     intelligence: intelligence,
//     charisma: charisma,
//     gold: gold,
//     exp: exp,
//     level: level,
//     maxHP: maxHP,
//     currentHP: currentHP,
//     maxMP: maxMP,
//     currentMP: currentMP,
//     maxStamina: maxStamina,
//     currentStamina: currentStamina,
//     currentLocation: currentLocation,
//     inventory: inventory,
//     id: id,
//   }
// };

export const deleteSave = (id) => ({
  type: c.DELETE_SAVE,
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

export const showSecondarySavedGames = ({
  type: c.SHOW_SECONDARY_SAVED_GAMES
})

export const refresh = ({
  type: c.REFRESH
});