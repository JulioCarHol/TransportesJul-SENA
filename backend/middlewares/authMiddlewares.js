const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error('Falla en la verificacion:', error);
      res.status(401).send('No autorizado, token invalidado');
    }
  }

  if (!token) {
    res.status(401).send('Acceso denegado, no se cuenta con token');
  }
};

module.exports = { protect };
