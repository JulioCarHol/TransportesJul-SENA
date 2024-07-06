// models/Destination.js
const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true }
});

const Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;