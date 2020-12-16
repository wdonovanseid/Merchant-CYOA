import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions/index.js';

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
      <LocationInfo />
    }
    return (
      <React.Fragment>
        <NavBar
        
          onClickingEndGame={props.onClickingEndGame}
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