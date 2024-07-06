// backend/routes/auth.js
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

// Autenticación
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

// Middleware para verificar si el usuario es administrador
const adminMiddleware = (req, res, next) => {
  User.findById(req.userId)
    .then(user => {
      if (user.role !== 'admin') {
        return res.status(403).send('Acceso denegado. Solo administradores.');
      }
      next();
    })
    .catch(err => res.status(500).send('Error del servidor.'));
};

// Register
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body; // Allow setting role, but validate it
  try {
    const user = new User({ email, password, role });
    await user.save();
    res.status(201).send('Usuario registrado');
  } catch (error) {
    res.status(400).send('Error al registrar usuario');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(401).send('Correo o contraseña invalida');
    }
    const isPasswordValid = await user.matchPassword(password);
    if (!isPasswordValid) {
      console.log('Contraseña incorrecta');
      return res.status(401).send('Correo o contraseña incorrecta');
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token, userId: user._id });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(400).send('Error al iniciar sesion');
  }
});

// Agregar favoritos
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

// Obtener favoritos
router.get('/favorites/:userId', authMiddleware, async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('favorites');
    if (!user) return res.status(404).send('Usuario no encontrado');

    res.json(user.favorites);
  } catch (error) {
    res.status(400).send('Error al obtener favoritos');
  }
});

// Eliminar favoritos
router.delete('/favorites/:userId/:tripId', authMiddleware, async (req, res) => {
  const { userId, tripId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    user.favorites.pull(tripId);
    await user.save();
    res.status(200).send('Favorito eliminado');
  } catch (error) {
    console.error('Error al eliminar favorito:', error);
    res.status(400).send('Error al eliminar favorito');
  }
});

// Obtener estadísticas de administración
router.get('/admin/stats', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const userCount = await User.countDocuments({});
    const tripCount = await Trip.countDocuments({});
    const favoriteCount = await User.aggregate([
      { $unwind: '$favorites' },
      { $count: 'total' }
    ]);

    res.json({
      userCount,
      tripCount,
      favoriteCount: favoriteCount[0]?.total || 0
    });
  } catch (error) {
    res.status(500).send('Error al obtener estadísticas');
  }
});

module.exports = router;
