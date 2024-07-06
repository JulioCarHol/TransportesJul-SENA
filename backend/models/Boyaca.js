//backend/models/Boyaca.js
const mongoose = require('mongoose');

const BoyacaSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  imageAlt: { type: String, required: true },
  title: { type: String, required: true },
  rating: { type: Number, required: true }
});

const Boyaca = mongoose.model('Boyaca', BoyacaSchema);

module.exports = Boyaca;
