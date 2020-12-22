import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions/index.js';
import * as api from './../actions/apiActions.js';
import CharacterStatsScreen from './CharacterStatsScreen';
import InventoryScreen from './InventoryScreen';
import LevelUpForm from './LevelUpForm';
import BattleScreen from './BattleScreen';
import CurrentLocation from './CurrentLocation';
import NavBar from './NavBar';
import MapScreen from './MapScreen';
import EventsLog from './EventsLog';
import SecondarySavedGamesScreen from './SecondarySavedGamesScreen.js';

const testLocationArray = [
  {
    "locationCoordinates": {"x": 0, "y": 0, "z": 0},
    "locationMapIcon": "",
    "locationTitle": "Cave",
    "locationDescription": "Lorem ipsum",
    "locationSpecificActions": [
      {
        "actionName": "Pick up Stick",
        "eventTrigger": true,
        "onClick": function addItem(player, action, refreshFunc){
          if (player.inventory.some(x => x.itemName === "Stick")) {
            player.inventory.find(x => x.itemName === "Stick").quantity+=1;
          } else {
            player.inventory.push({
              "itemName": "Stick",
              "consume": false,
              "quantity": 1
            });
          }
          refreshFunc();
        }
      },
      {
        "actionName": "Pick up Potion",
        "eventTrigger": true,
        "onClick": function addItem(player, action, refreshFunc){
          action.eventTrigger = false;
          player.inventory.push({
            "itemName": "Health Potion",
            "consume": true,
            "quantity": 3,
            "onUse": function useItem(player, item, refreshFunc){
              player.currentHP+=5;
              if (player.currentHP>player.maxHP) {
                player.currentHP=player.maxHP;
              }
              item.quantity-=1;
              if (item.quantity <= 0) {
                let temp = []
                for (let i=0; i<player.inventory.length; i++) {
                  if (player.inventory[i].itemName !== "Health Potion") {
                    temp.push(player.inventory[i])
                  }
                }
                player.inventory = temp;
              }
              refreshFunc();
              console.log(player.name+" healed for "+player.currentHP)
            }
          });
          refreshFunc();
        }
      },
      {
        "actionName": "Pick up test EXP Potion",
        "eventTrigger": true,
        "onClick": function addItem(player, action, refreshFunc){
          action.eventTrigger = false;
          player.inventory.push({
            "itemName": "test EXP Potion",
            "consume": true,
            "quantity": 3,
            "onUse": function useItem(player, item, refreshFunc){
              player.exp+=50;
              refreshFunc();
            }
          });
          refreshFunc();
        }
      },
      {
        "actionName": "Derp",
        "eventTrigger": true,
        "onClick": function derp(player){
          console.log("inventory", player.inventory)
        }
      }
    ],
    "locationMovementActions": [
      {
        "actionName": "Go North",
        "onClick": function goNorth(player, refreshFunc){
          player.currentLocation["y"]+=1;
          refreshFunc();
        }
      }
    ]
  },
  {
    "locationCoordinates": {"x": 0, "y": 1, "z": 0},
    "locationMapIcon": "",
    "locationTitle": "Outside of Cave",
    "locationDescription": "Lorem ipsum",
    "locationSpecificActions": [],
    "locationMovementActions": [
      {
        "actionName": "Go South",
        "onClick": function goSouth(player, refreshFunc){
          player.currentLocation["y"]-=1;
          refreshFunc();
        }
      } 
    ]
  }
]

class GameControl extends React.Component {

  handleCheckCharacterStats = () => {
    this.props.dispatch(a.showCharacterStats);
  }

  handleCheckInventory = () => {
    this.props.dispatch(a.showCharacterInventory);
  }

  handleReturnToLocationInfo = () => {
    this.props.dispatch(a.showCurrentLocation);
  }

  handleShowLevelUpForm = () => {
    this.props.dispatch(a.showLevelUpForm);
  }

  handleSaveGameScreen = () => {
    this.props.dispatch(a.showSecondarySavedGames)
  }

  handleLevelUp = (newlyLeveledPlayer) => {
    // this.props.dispatch(a.createNewPlayerCharacter(newlyLeveledPlayer));
    this.props.dispatch(a.selectPC(newlyLeveledPlayer));
    this.props.dispatch(a.showCurrentLocation)
  }

  handleNewSave = (player) => {
    this.props.dispatch(a.createNewPlayerCharacter(player));
    console.log(this.props.playerCharacterList)
  }

  handleOverwriteSave = () => {

  }

  handleLoadGame = (id) => {
    console.log(id)
    const save = this.props.playerCharacterList[id];
    console.log(save)
    this.props.dispatch(a.selectPC(save));
    console.log(this.props.selectedPlayerCharacter)
    this.props.dispatch(a.startGame);
  }

  handleDeleteGame = (id) => {
    this.props.dispatch(a.deletePlayerCharacter(id));
  }

  handleReturnToStart = () => {
    this.props.dispatch(a.unselectPC);
    this.props.dispatch(a.showSplashScreen);
  }

  handleRefresh = () => {
    this.props.dispatch(a.refresh);
  }

  render() {
    let currentlyVisibleState = null;
    let playerLocation = this.props.selectedPlayerCharacter.currentLocation;
    let testLocation = testLocationArray.find(loc => loc.locationCoordinates.x === playerLocation.x && loc.locationCoordinates.y === playerLocation.y && loc.locationCoordinates.z === playerLocation.z);
    if (this.props.currentGameContentScreen === "checkCharacter") {
      currentlyVisibleState =
      <CharacterStatsScreen
        playerCharacter={this.props.selectedPlayerCharacter}
        onClickingReturn={this.handleReturnToLocationInfo}
        onClickingLevelUp={this.handleShowLevelUpForm}
      />
    } else if (this.props.currentGameContentScreen === "checkInventory") {
      currentlyVisibleState =
      <InventoryScreen
        playerCharacter={this.props.selectedPlayerCharacter}
        onClickingReturn={this.handleReturnToLocationInfo}
        refresh={this.handleRefresh}
      />
    } else if (this.props.currentGameContentScreen === "levelUp") {
      currentlyVisibleState =
      <LevelUpForm
        playerCharacter={this.props.selectedPlayerCharacter}
        onClickingLevelUp={this.handleLevelUp}
        onClickingReturnToCharacterStats={this.handleCheckCharacterStats}
      />
    } else if (this.props.currentGameContentScreen === "inBattle") {
      currentlyVisibleState =
      <BattleScreen
        playerCharacter={this.props.selectedPlayerCharacter}
        enemyCharacters={this.props.currentEnemyEncounter}
      />
    } else if (this.props.currentGameContentScreen === "savedGames") {
      currentlyVisibleState =
      <SecondarySavedGamesScreen
        player={this.props.selectedPlayerCharacter}
        savedGames={this.props.playerCharacterList}
        onClickingReturn={this.handleReturnToLocationInfo}
        onClickingLoadGame={this.handleLoadGame}
        onClickingDeleteGame={this.handleDeleteGame}
        onClickingNewSave={this.handleNewSave}
        onClickingOverwriteSave={this.handleOverwriteSave}
      />
    } else {
      currentlyVisibleState =
      <CurrentLocation
        locationInfo={testLocation}
        playerCharacter={this.props.selectedPlayerCharacter}
        refresh={this.handleRefresh}
      />
    }
    return (
      <React.Fragment>
        <NavBar
          expCheck={this.props.selectedPlayerCharacter.exp}
          onClickingCharacterStats={this.handleCheckCharacterStats}
          onClickingInventory={this.handleCheckInventory}
          onClickingShowSavedGames={this.handleSaveGameScreen}
          onClickingEndGame={this.handleReturnToStart}
        />
        <div className="row">
          <div className="col-6">
            {currentlyVisibleState}
          </div>
          <div className="col-6">
            <MapScreen 
              mapIcon={testLocation.locationMapIcon}
            />
            <EventsLog />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

GameControl.propTypes = {
  initialScreenToShow: PropTypes.string,
  currentGameContentScreen: PropTypes.string,
  playerCharacterList: PropTypes.object,
  selectedPlayerCharacter: PropTypes.object,
  refreshState: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    initialScreenToShow: state.initialScreenToShow,
    currentGameContentScreen: state.currentGameContentScreen,
    playerCharacterList: state.playerCharacterList,
    selectedPlayerCharacter: state.selectedPlayerCharacter,
    refreshState: state.refreshState
  }
}

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;