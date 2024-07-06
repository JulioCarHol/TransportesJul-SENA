import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Favorites from './Favorites';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

describe('Favorites Component', () => {
  const mockFavorites = [
    {
      _id: '1',
      origin: 'Bogota',
      destination: 'Medellin',
      departureTime: '10:00 AM',
      arrivalTime: '12:00 PM',
      busType: 'Luxury',
      company: 'Company A',
      cost: 50000,
      imagen: 'https://via.placeholder.com/150',
    },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockFavorites });
  });

  test('renders favorites correctly', async () => {
    await act(async () => {
      render(<Favorites />);
    });

    expect(screen.getByText(/Bogota - Medellin/i)).toBeInTheDocument();
    expect(screen.getByText(/Company A/i)).toBeInTheDocument();
    expect(screen.getByText(/Salida: 10:00 AM/i)).toBeInTheDocument();
    expect(screen.getByText(/Llegada: 12:00 PM/i)).toBeInTheDocument();
    expect(screen.getByText(/Tipo de bus: Luxury/i)).toBeInTheDocument();
  });

  test('removes a favorite', async () => {
    axios.delete.mockResolvedValue({ status: 200 });

    await act(async () => {
      render(<Favorites />);
    });

    const removeButton = screen.getByText(/Borrar/i);
    await act(async () => {
      fireEvent.click(removeButton);
    });

    expect(screen.queryByText(/Bogota - Medellin/i)).not.toBeInTheDocument();
  });
});
