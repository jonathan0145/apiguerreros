const express = require('express');
const app = express();
const sequelize = require('./config/database'); // Importar la conexión a la base de datos
require('dotenv').config(); // Cargar variables de entorno

// Middleware
app.use(express.json());

// Probar la conexión a la base de datos
sequelize.sync({ force: false }) // Cambia a true si quieres sobrescribir tablas existentes
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar la base de datos:', err));

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde tu API!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});