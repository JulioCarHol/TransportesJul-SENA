// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Trip = require('./models/Trip');
const authRoutes = require('./routes/auth');
const { WebSocketServer } = require('ws');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado MongoDB');
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
  console.log(`Servidor corriendo en el servidor: ${port}`);
});

// Configuración de WebSocket
const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');
  ws.on('message', (message) => {
    console.log('Received:', message);
  });
  ws.send('Welcome to WebSocket server');
});
