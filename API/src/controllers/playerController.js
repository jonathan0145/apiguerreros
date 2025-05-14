const Player = require('../models/Player');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registro de jugadores
exports.registerPlayer = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario ya existe
    const existingPlayer = await Player.findOne({ where: { username } });
    if (existingPlayer) {
      return res.status(400).json({ error: 'El nombre de usuario ya está en uso' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el jugador
    const newPlayer = await Player.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'Jugador registrado exitosamente', player: newPlayer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Autenticación de jugadores
exports.loginPlayer = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario existe
    const player = await Player.findOne({ where: { username } });
    if (!player) {
      return res.status(404).json({ error: 'Jugador no encontrado' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, player.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: player.id, username: player.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};