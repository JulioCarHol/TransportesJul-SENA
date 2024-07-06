
import 'jest-axe/extend-expect';
import axiosMock from 'axios-mock-adapter';
import axios from 'axios';


// Mock
const mock = new axiosMock(axios);

//URL API
mock.onGet(`${process.env.REACT_APP_API_URL}/auth/favorites/userId`).reply(200, [
  {
    _id: '1',
    origin: 'Bogota',
    destination: 'Medellin',
    departureTime: '10:00 AM',
    arrivalTime: '12:00 PM',
    busType: 'Normal',
    company: 'Numero uno',
    cost: 50000,
    imagen: ' ',
  },
]);

//SweetAlert2
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));
