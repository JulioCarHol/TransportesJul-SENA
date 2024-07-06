import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
} from '@chakra-ui/react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const AdminDashboard = () => {
  const [places, setPlaces] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    imageAlt: '',
    rating: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/region-boyaca');
      setPlaces(response.data.popularPlaces);
    } catch (error) {
      console.error('Error al obtener los datos de Boyacá:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updatePlace(editId, formData);
    } else {
      await addPlace(formData);
    }
    setFormData({ title: '', imageUrl: '', imageAlt: '', rating: 0 });
    setIsEditing(false);
    setEditId(null);
    fetchPlaces();
  };

  const addPlace = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/region-boyaca', data);
    } catch (error) {
      console.error('Error al agregar lugar:', error);
    }
  };

  const updatePlace = async (id, data) => {
    try {
      await axios.put(`http://localhost:5000/api/region-boyaca/${id}`, data);
    } catch (error) {
      console.error('Error al actualizar lugar:', error);
    }
  };

  const deletePlace = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/region-boyaca/${id}`);
      fetchPlaces();
    } catch (error) {
      console.error('Error al eliminar lugar:', error);
    }
  };

  const handleEdit = (place) => {
    setFormData(place);
    setIsEditing(true);
    setEditId(place._id);
  };

  return (
    <>
      <Box p={8}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Título</FormLabel>
              <Input name="title" value={formData.title} onChange={handleChange} />
            </FormControl>
            <FormControl id="imageUrl">
              <FormLabel>URL de la Imagen</FormLabel>
              <Input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
            </FormControl>
            <FormControl id="imageAlt">
              <FormLabel>Alt de la Imagen</FormLabel>
              <Input name="imageAlt" value={formData.imageAlt} onChange={handleChange} />
            </FormControl>
            <FormControl id="rating">
              <FormLabel>Rating</FormLabel>
              <Input name="rating" type="number" value={formData.rating} onChange={handleChange} />
            </FormControl>
            <Button type="submit" colorScheme="blue">{isEditing ? 'Actualizar' : 'Agregar'}</Button>
          </Stack>
        </form>

        <Table variant="simple" mt={8}>
          <Thead>
            <Tr>
              <Th>Título</Th>
              <Th>Imagen</Th>
              <Th>Rating</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {places.map((place) => (
              <Tr key={place._id}>
                <Td>{place.title}</Td>
                <Td>
                  <img src={place.imageUrl} alt={place.imageAlt} width={100} />
                </Td>
                <Td>{place.rating}</Td>
                <Td>
                  <Button onClick={() => handleEdit(place)} colorScheme="yellow" mr={2}>Editar</Button>
                  <Button onClick={() => deletePlace(place._id)} colorScheme="red">Eliminar</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default AdminDashboard;
