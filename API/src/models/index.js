
const Player = require('./Player');
const Warrior = require('./Warrior');
const Match = require('./Match');
const WarriorType = require('./WarriorType');
const Race = require('./Race');

// Configurar relaciones
Player.hasMany(Warrior, { foreignKey: 'playerId' });
Warrior.belongsTo(Player, { foreignKey: 'playerId' });

Warrior.belongsTo(WarriorType, { foreignKey: 'warriorTypeId' });
WarriorType.hasMany(Warrior, { foreignKey: 'warriorTypeId' });

Warrior.belongsTo(Race, { foreignKey: 'raceId' });
Race.hasMany(Warrior, { foreignKey: 'raceId' });

Match.belongsTo(Player, { as: 'winner', foreignKey: 'winnerId' });

module.exports = {
  Player,
  Warrior,
  Match,
  WarriorType,
  Race,
};