const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Match = sequelize.define('Match', {
  mode: {
    type: DataTypes.ENUM('power', 'magic', 'combined'),
    allowNull: false,
  },
  winnerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'players',
      key: 'id',
    },
  },
}, {
  tableName: 'matches',
  timestamps: true,
});

module.exports = Match;