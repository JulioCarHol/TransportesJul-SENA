import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Badge,
  Flex,
  Avatar,
  Box,
  Text,
  Button,
  Tag
} from '@chakra-ui/react';
import { IntlProvider, FormattedNumber } from 'react-intl';
import Swal from 'sweetalert2';
// src/components/Favorites.jsx
const CustomCardComponent = React.forwardRef(({ children, ...rest }, ref) => (
  <Box p="1">
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) throw new Error("ID de usuario no encontrado");
        
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/favorites/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setFavorites(response.data);
      } catch (error) {
        console.error("Error al obtener favoritos: ", error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al obtener favoritos',
          showConfirmButton: false,
          timer: 1500
        });
      }
    };
    fetchFavorites();
  }, []);

  const removeFromFavorites = async (tripId) => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/auth/favorites/${userId}/${tripId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (response.status === 200) {
        setFavorites(favorites.filter((trip) => trip._id !== tripId));
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Eliminado de favoritos',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error("Error al eliminar favoritos:", error);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error al eliminar favoritos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <Box>
      {favorites.map((trip) => (
        <Flex
          key={trip._id}
          p="5"
          shadow="md"
          borderWidth="4px"
          borderRadius="md"
          mb="4"
          display="flex"
          justifyContent="center"
          objectFit="contain"
        >
          <Avatar
            maxW="22em"
            minW="18em"
            height="auto"
            mb="25px"
            mt="25px"
            src={trip.imagen}
            mr="14"
            objectFit="contain"
            borderRadius={"none"}
          />
          <Box
            ml="3"
            display="flex"
            mx="5"
            justifyContent="center"
            marginTop="auto"
            marginBottom="auto"
            alignItems="center"
          >
            <Text
              fontWeight="bold"
              fontSize="1.7em"
              display="flex"
              flexDirection="column"
              mx="5"
              color="#036F10"
            >
              {trip.origin} - {trip.destination}
              <Badge ml="2" colorScheme="green" fontSize="0.8em" textAlign="center">
                {trip.company}
              </Badge>
            </Text>

            <Box display="flex" flexDirection="column">
              <Text fontSize="md" mt="1" mx="80px">
                <CustomCardComponent fontSize="1.5em" textAlign="center">
                  Salida: {trip.departureTime}
                </CustomCardComponent>
                <CustomCardComponent fontSize="1.5em" textAlign="center">
                  Llegada: {trip.arrivalTime}
                </CustomCardComponent>
              </Text>
              <Text
                display="flex"
                mx="80px"
                color="#635C5B"
                fontWeight="bold"
                textAlign="center"
                fontSize="1.2em"
              >
                Tipo de bus: {trip.busType}
              </Text>
            </Box>

            <Box flexDirection="column" display="flex" justifyContent="center" mx="80px">
              <IntlProvider locale="es-CO">
                <Badge variant="subtle" fontSize="1.2em" colorScheme="yellow" display="flex">
                  Desde los <FormattedNumber value={trip.cost} style="currency" currency="COP" minimumFractionDigits={0} maximumFractionDigits={0} />
                </Badge>
              </IntlProvider>
              <Button
                mt="4"
                colorScheme="red"
                display="flex"
                justifyContent="center"
                paddingLeft="30px"
                paddingRight="30px"
                onClick={() => removeFromFavorites(trip._id)}
              >
                Borrar
              </Button>
            </Box>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Favorites;
