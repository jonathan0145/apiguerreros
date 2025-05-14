const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Spell = sequelize.define('Spell', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  percentage: {
    type: DataTypes.INTEGER, // Efectividad del hechizo
    allowNull: false,
  },
}, {
  tableName: 'spells',
  timestamps: false,
});

module.exports = Spell;