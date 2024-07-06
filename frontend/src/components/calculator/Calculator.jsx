import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TravelCalculator = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [trips, setTrips] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena', 'Santa Marta', 'Bucaramanga', 'Cúcuta']);
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/trips', {
        params: { origin, destination },
      });
      setTrips(response.data);
    } catch (error) {
      console.error('Error al al obtener datos:', error);
    }
  };

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTrips();
  };

  return (
    <div>
      <h1>Calculadora de Viajes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Origen:</label>
          <select value={origin} onChange={handleOriginChange}>
            <option value="">Selecciona un origen</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Destino:</label>
          <select value={destination} onChange={handleDestinationChange}>
            <option value="">Selecciona un destino</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Buscar</button>
      </form>
      {trips.length > 0 && (
        <div>
          <h2>Opciones de Viaje</h2>
          <ul>
            {trips.map((trip) => (
              <li key={`${trip.origin}-${trip.destination}`}>
                {trip.origin} a {trip.destination}: ${trip.cost}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TravelCalculator;