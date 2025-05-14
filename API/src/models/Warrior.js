const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Warrior = sequelize.define('Warrior', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_power: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_magic: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  health: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  playerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'players',
      key: 'id',
    },
  },
}, {
  tableName: 'warriors',
  timestamps: true,
});

module.exports = Warrior;