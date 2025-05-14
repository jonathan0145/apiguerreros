const Player = require('./Player');
const Warrior = require('./Warrior');
const Match = require('./Match');
const WarriorType = require('./WarriorType');
const Race = require('./Race');
const Power = require('./Power'); // Importar modelo Power
const Spell = require('./Spell'); // Importar modelo Spell

// Configurar relaciones
Player.hasMany(Warrior, { foreignKey: 'playerId' });
Warrior.belongsTo(Player, { foreignKey: 'playerId' });

Warrior.belongsTo(WarriorType, { foreignKey: 'warriorTypeId' });
WarriorType.hasMany(Warrior, { foreignKey: 'warriorTypeId' });

Warrior.belongsTo(Race, { foreignKey: 'raceId' });
Race.hasMany(Warrior, { foreignKey: 'raceId' });

Match.belongsTo(Player, { as: 'winner', foreignKey: 'winnerId' });

// Relación muchos a muchos entre Warrior y Power
Warrior.belongsToMany(Power, { through: 'WarriorPowers', foreignKey: 'warriorId' });
Power.belongsToMany(Warrior, { through: 'WarriorPowers', foreignKey: 'powerId' });

// Relación muchos a muchos entre Warrior y Spell
Warrior.belongsToMany(Spell, { through: 'WarriorSpells', foreignKey: 'warriorId' });
Spell.belongsToMany(Warrior, { through: 'WarriorSpells', foreignKey: 'spellId' });

module.exports = {
  Player,
  Warrior,
  Match,
  WarriorType,
  Race,
  Power,
  Spell,
};