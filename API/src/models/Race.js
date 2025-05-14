const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Race = sequelize.define('Race', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'races',
  timestamps: false,
});

module.exports = Race;