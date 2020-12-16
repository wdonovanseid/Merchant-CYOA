import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions/index.js';

class GameContent extends React.Component {



  render() {
    let currentlyVisibleState = null;
    if (this.props.currentGameContentScreen === "checkCharacter") {
      currentlyVisibleState =
      <CharacterStatsScreen 
        playerCharacter={this.props.playerCharacter}
      />
    } else if (this.props.currentGameContentScreen === "checkInventory") {
      currentlyVisibleState =
      <InventoryScreen 
        inventory={this.props.playerCharacter.inventory}
      />
    } else if (this.props.currentGameContentScreen === "levelUp") {
      currentlyVisibleState =
      <LevelUpForm 
        playerCharacter={this.props.playerCharacter}
      />
    } else if (this.props.currentGameContentScreen === "inBattle") {
      currentlyVisibleState =
      <BattleScreen 
        playerCharacter={this.props.playerCharacter}
        enemyCharacters={this.props.currentEnemyEncounter}
      />
    } else {
      currentlyVisibleState =
      <LocationInfo />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

GameContent.propTypes = {

};

const mapStateToProps = state => {
  return {

  }
}

GameContent = connect(mapStateToProps)(GameContent);

export default GameContent;