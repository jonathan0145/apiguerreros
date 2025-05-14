const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Power = sequelize.define('Power', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  percentage: {
    type: DataTypes.INTEGER, // Efectividad del poder
    allowNull: false,
  },
}, {
  tableName: 'powers',
  timestamps: false,
});

module.exports = Power;