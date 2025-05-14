const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar variables de entorno desde .env

// Crear la instancia de Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario
  process.env.DB_PASSWORD, // Contraseña
  {
    host: process.env.DB_HOST, // Host (por ejemplo, localhost)
    dialect: 'mysql', // Tipo de base de datos
    logging: false, // Desactiva el logging de consultas SQL en la consola
  }
);

// Probar la conexión
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

module.exports = sequelize;