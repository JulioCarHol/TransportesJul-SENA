/*const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  // Verificar si hay un token JWT en el encabezado de autorización
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extraer el token de la cabecera (formato: Bearer <token>)
      token = req.headers.authorization.split(' ')[1];

      // Verificar y decodificar el token JWT utilizando la clave secreta
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Obtener el usuario desde la base de datos utilizando el ID del token decodificado
      req.user = await User.findById(decoded.id).select('-password');

      // Continuar con la siguiente middleware/ruta
      next();
    } catch (error) {
      // Manejar errores de token JWT inválido o expirado
      console.error('Token verification failed:', error);
      res.status(401).send('Not authorized, token failed');
    }
  }

  // Manejar el caso donde no se proporcionó ningún token en la cabecera
  if (!token) {
    res.status(401).send('Not authorized, no token');
  }
};

module.exports = { protect };
*/