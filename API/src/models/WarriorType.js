const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const WarriorType = sequelize.define('WarriorType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'warrior_types',
  timestamps: false,
});

module.exports = WarriorType;