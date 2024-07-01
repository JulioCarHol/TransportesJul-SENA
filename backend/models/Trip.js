// backend/models/Trip.js

const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  cost: Number,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
