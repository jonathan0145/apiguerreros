const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Ruta para registrar jugadores
router.post('/register', playerController.registerPlayer);

// Ruta para autenticar jugadores
router.post('/login', playerController.loginPlayer);

module.exports = router;