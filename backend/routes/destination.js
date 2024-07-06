// routes/destination.js
const express = require('express');
const Destination = require('../models/Destination');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Create Destination
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  const { title, description, location, image, rating } = req.body;
  try {
    const destination = new Destination({ title, description, location, image, rating });
    await destination.save();
    res.status(201).json(destination);
  } catch (error) {
    res.status(400).send('Error creating destination');
  }
});

// Read Destinations
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(400).send('Error fetching destinations');
  }
});

// Update Destination
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { id } = req.params;
  const { title, description, location, image, rating } = req.body;
  try {
    const destination = await Destination.findByIdAndUpdate(id, { title, description, location, image, rating }, { new: true });
    res.json(destination);
  } catch (error) {
    res.status(400).send('Error updating destination');
  }
});

// Delete Destination
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    await Destination.findByIdAndDelete(id);
    res.send('Destination deleted');
  } catch (error) {
    res.status(400).send('Error deleting destination');
  }
});

module.exports = router;
