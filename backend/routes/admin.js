// backend/routes/admin.js
const express = require('express');
const User = require('../models/User');
const Trip = require('../models/Trip');
const router = express.Router();

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

// Estadísticas
router.get('/stats', authMiddleware, async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const tripCount = await Trip.countDocuments();
    const favoriteCount = await User.aggregate([
      { $unwind: '$favorites' },
      { $count: 'totalFavorites' }
    ]);

    res.json({
      userCount,
      tripCount,
      favoriteCount: favoriteCount[0]?.totalFavorites || 0
    });
  } catch (error) {
    res.status(500).send('Error al obtener estadísticas');
  }
});

module.exports = router;
