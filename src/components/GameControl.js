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
        "onClick": function addItem(player, action){
          action.eventTrigger = false;
          player.inventory.push({
            "itemName": "Stick",
            "consume": false
          });
        }
      },
      {
        "actionName": "Pick up Potion",
        "eventTrigger": true,
        "onClick": function addItem(player){
          player.inventory.push({
            "itemName": "Health Potion",
            "consume": true,
            "quantity": 3,
            "onUse": function useItem(player, item){
              player.currentHP+=5;
              if (player.currentHP>player.maxHP) {
                player.currentHP=player.maxHP;
              }
              item.quantity-=1;
              if (item.quantity <= 0) {
                player.inventory.filter(x => x.itemName !== item.itemName); // doesn't work yet
                console.log(item)
                console.log(player.inventory)
              }
              console.log(player.name+" healed for "+player.currentHP)
            }
          });
        }
      },
      {
        "actionName": "Pick up test EXP Potion",
        "eventTrigger": true,
        "onClick": function addItem(player){
          player.inventory.push({
            "itemName": "test EXP Potion",
            "consume": true,
            "quantity": 3,
            "onUse": function useItem(player){
              player.exp+=50;
            }
          });
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
        "onClick": function goNorth(player){
          player.currentLocation["y"]+=1;
          console.log(player)
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
        "onClick": function goSouth(player){
          player.currentLocation["y"]-=1;
          console.log(player)
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
      />
    } else if (this.props.currentGameContentScreen === "levelUp") {
      currentlyVisibleState =
      <LevelUpForm
        playerCharacter={this.props.selectedPlayerCharacter}
        onClickingReturnToCharacterStats={this.handleCheckCharacterStats}
      />
    } else if (this.props.currentGameContentScreen === "inBattle") {
      currentlyVisibleState =
      <BattleScreen
        playerCharacter={this.props.selectedPlayerCharacter}
        enemyCharacters={this.props.currentEnemyEncounter}
      />
    } else {
      currentlyVisibleState =
      <CurrentLocation
        locationInfo={testLocation}
        playerCharacter={this.props.selectedPlayerCharacter}
      />
    }
    return (
      <React.Fragment>
        <NavBar
          expCheck={this.props.selectedPlayerCharacter.exp}
          onClickingCharacterStats={this.handleCheckCharacterStats}
          onClickingInventory={this.handleCheckInventory}
          // onClickingSaveGame={this.handleSaveGameScreen}
          // onClickingEndGame={props.onClickingEndGame}
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
  // onClickingEndGame: PropTypes.func,
  currentGameContentScreen: PropTypes.string,
  selectedPlayerCharacter: PropTypes.object,

};

const mapStateToProps = state => {
  return {
    currentGameContentScreen: state.currentGameContentScreen,
    selectedPlayerCharacter: state.selectedPlayerCharacter,
  }
}

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;