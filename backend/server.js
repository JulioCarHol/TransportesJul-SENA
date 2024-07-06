const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Trip = require('./models/Trip');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const regionRoutes = require('./routes/region');  // Importar las rutas de región

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', regionRoutes);  // Usar las rutas de región
app.use('/api/admin', adminRoutes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Conectado a MongoDB');
}).catch((error) => {
  console.error('Error al conectar a MongoDB:', error.message);
});

// Rutas de autenticacion
app.use('/api/auth', authRoutes);

// Ruta para obtener viajes
app.get('/api/trips', async (req, res) => {
  const { origin, destination } = req.query;
  try {
    const trips = await Trip.find({ origin, destination });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Error en obtener los viajes', error });
  }
});

const server = app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
