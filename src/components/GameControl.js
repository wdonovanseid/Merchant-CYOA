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

const test = {
  "locationTitle": "Cave",
  "locationDescription": "Lorem ipsum",
  "locationSpecificActions": [
    {
      "actionName": "Pick up Stick",
      "onClick": function addItem(player){
        player.inventory.push({
          "itemName": "Stick",
          "consume": false
        });
      }
    },
    {
      "actionName": "Derp"
    }
  ],
  "locationMovementActions": [
    {
      "actionName": "Go North",
      "onClick": function goNorth(player){
        player.currentLocation["y"]+=1;
      }
    }
  ]
}

class GameControl extends React.Component {



  render() {
    let currentlyVisibleState = null;
    if (this.props.currentGameContentScreen === "checkCharacter") {
      currentlyVisibleState =
      <CharacterStatsScreen
        playerCharacter={this.props.selectedPlayerCharacter}
      />
    } else if (this.props.currentGameContentScreen === "checkInventory") {
      currentlyVisibleState =
      <InventoryScreen
        inventory={this.props.playerCharacter.inventory}
      />
    } else if (this.props.currentGameContentScreen === "levelUp") {
      currentlyVisibleState =
      <LevelUpForm
        playerCharacter={this.props.selectedPlayerCharacter}
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
        locationInfo={test}
        playerCharacter={this.props.selectedPlayerCharacter}
      />
    }
    return (
      <React.Fragment>
        <NavBar
        
          // onClickingEndGame={props.onClickingEndGame}
        />
        {currentlyVisibleState}
        <MapScreen />
        <EventsLog />
      </React.Fragment>
    );
  }
}

GameControl.propTypes = {
  onClickingEndGame: PropTypes.func,
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