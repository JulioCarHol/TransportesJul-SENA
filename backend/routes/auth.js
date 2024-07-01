// backend/routes/auth.js
const express = require('express');
const User = require('../models/User');
const Trip = require('../models/Trip');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Acceso denegado');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (ex) {
    res.status(400).send('Token invalido.');
  }
};

// Register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).send('Usuario registrado');
  } catch (error) {
    res.status(400).send('Error en el registro');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send('Email o contraseña incorrecta');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token, userId: user._id }); // Incluye userId en la respuesta
  } catch (error) {
    res.status(400).send('Logeo no exitoso');
  }
});

// Add to favorites
router.post('/favorites', authMiddleware, async (req, res) => {
  const { tripId } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).send('Usuario no encontrado');

    if (!user.favorites.includes(tripId)) {
      user.favorites.push(tripId);
      await user.save();
    }
    res.status(200).send('Ruta agregada a tus favoritos');
  } catch (error) {
    res.status(400).send('Error al agregar a favoritos');
  }
});

// Get favorites
router.get('/favorites/:userId', authMiddleware, async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('favoritos');
    if (!user) return res.status(404).send('Usuario no encontrado');

    res.json(user.favorites);
  } catch (error) {
    res.status(400).send('Error al obtener favoritos');
  }
});

// Delete from favorites
router.delete('/favorites/:tripId', authMiddleware, async (req, res) => {
  const { tripId } = req.params;
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).send('Usuario no encontrado');

    user.favorites.pull(tripId);
    await user.save();

    res.status(200).send('Ruta eliminada de tus favoritos');
  } catch (error) {
    res.status(400).send('Hubo un error al eliminar favorito');
  }
});

module.exports = router;
