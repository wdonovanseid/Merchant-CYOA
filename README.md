Merchant-CYOA

Merchant in RPG
Get ingredients and items by searching in forest, lake, volcano, demonland, etc.
encounter monsters and run away or evade them through item usage or stat based challenges CYOA style
sell items in shop, you dictate price; bargaining Recettear style (implement later)
use forge services to make better items to sell (implement later)

States

worldState
{
	events
	{
		exampleEventTriggered: false
	}
}
playerCharacter
{
	MaxHP
	CurrentHP
	MaxMP
	CurrentMP
	MaxStamina
	CurrentStamina
	Exp
	Strength
	Dexterity
	Constitution
	Charisma
	Intelligence
	Wisdom
	Race?
	Class?
	{
		Lvl
		Actions
	}
	Inventory
	CurrentLocation
	RespawnPoint?
	Skills?
}