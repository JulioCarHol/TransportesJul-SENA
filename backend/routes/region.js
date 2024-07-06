const express = require('express');
const Boyaca = require('../models/Boyaca');
const router = express.Router();

// Obtener los lugares populares de Boyacá
router.get('/region-boyaca', async (req, res) => {
  try {
    const places = await Boyaca.find();
    res.json({ popularPlaces: places });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de Boyacá' });
  }
});

// Agregar un lugar popular
router.post('/region-boyaca', async (req, res) => {
  const { title, imageUrl, imageAlt, rating } = req.body;
  try {
    const newPlace = new Boyaca({ title, imageUrl, imageAlt, rating });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el lugar' });
  }
});

// Actualizar un lugar popular
router.put('/region-boyaca/:id', async (req, res) => {
  const { id } = req.params;
  const { title, imageUrl, imageAlt, rating } = req.body;
  try {
    const updatedPlace = await Boyaca.findByIdAndUpdate(id, { title, imageUrl, imageAlt, rating }, { new: true });
    res.json(updatedPlace);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el lugar' });
  }
});

// Eliminar un lugar popular
router.delete('/region-boyaca/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Boyaca.findByIdAndDelete(id);
    res.status(200).json({ message: 'Lugar eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el lugar' });
  }
});

module.exports = router;
