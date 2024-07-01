// backend/seed.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Trip from './models/Trip.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const trips = [
  { origin: "Ciudad A", destination: "Ciudad B", cost: 100 },
  { origin: "Ciudad A", destination: "Ciudad C", cost: 200 },
  { origin: "Ciudad B", destination: "Ciudad C", cost: 150 },
  { origin: "Ciudad B", destination: "Ciudad D", cost: 250 },
  { origin: "Ciudad C", destination: "Ciudad D", cost: 100 }
];

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB().catch(err => console.log(err));
