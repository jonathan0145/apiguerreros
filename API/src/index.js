const express = require('express');
const app = express();
const sequelize = require('./config/database'); // Importar la conexión a la base de datos
const { Player, Warrior, Match, WarriorType, Race } = require('./models'); // Importar los modelos
require('dotenv').config(); // Cargar variables de entorno

const playerRoutes = require('./routes/playerRoutes'); // Importar las rutas de jugadores

// Middleware
app.use(express.json());

// Probar la conexión a la base de datos y sincronizar modelos
sequelize.sync({ force: false }) // Cambia a true si quieres sobrescribir tablas existentes
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar la base de datos:', err));

// Rutas
app.use('/players', playerRoutes); // Middleware para las rutas de jugadores

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde tu API!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});