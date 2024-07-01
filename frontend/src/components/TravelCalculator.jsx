// src/components/TravelCalculator.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Badge,
  Flex,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  Select,
  Tag,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { IntlProvider, FormattedNumber } from 'react-intl';
import { CheckboxGroup, Checkbox } from "@chakra-ui/react";

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box p="1">
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));

const TravelCalculator = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [tripType, setTripType] = useState("Solo ida");
  const [trips, setTrips] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(["Ciudad A", "Ciudad B", "Ciudad C", "Ciudad D"]);
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/trips`,
        {
          params: { origin, destination, tripType },
        }
      );
      setTrips(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTrips();
  };

  const addToFavorites = async (tripId) => {
    try {
      const userId = localStorage.getItem('userId'); // Asume que almacenas el userId en localStorage al iniciar sesión
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/favorites`,
        { userId, tripId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
        }
      );
      if (response.status === 200) {
        alert('Trip added to favorites');
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  return (
    <Box>
      <Box
        as="form"
        onSubmit={handleSubmit}
        p={4}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        mb={8}
      >
        <FormControl id="origin" mb={4}>
          <FormLabel>Origen:</FormLabel>
          <Select
            value={origin}
            onChange={handleOriginChange}
            placeholder="Selecciona un origen"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl id="destination" mb={4}>
          <FormLabel>Destino:</FormLabel>
          <Select
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Selecciona un destino"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl as="fieldset" mb={4}>
          <FormLabel as="legend">Tipo de viaje:</FormLabel>
          <CheckboxGroup colorScheme="green">
            <Stack spacing={4} direction="row">
              <Checkbox value="Solo ida" isChecked={tripType === "Solo ida"} onChange={handleTripTypeChange}>
                Solo ida
              </Checkbox>
              <Checkbox value="Ida y vuelta" isChecked={tripType === "Ida y vuelta"} onChange={handleTripTypeChange}>
                Ida y vuelta
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>

        <Button type="submit" colorScheme="blue" width="full">
          Buscar
        </Button>
      </Box>

      {trips.length > 0 && (
        <div>
          {trips.map((trip, index) => (
            <Flex
              key={index}
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
                    <CustomCard fontSize="1.5em" textAlign="center">
                      Salida: {trip.departureTime}
                    </CustomCard>
                    <CustomCard fontSize="1.5em" textAlign="center">
                      Llegada: {trip.arrivalTime}
                    </CustomCard>
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
                    colorScheme="yellow"
                    display="flex"
                    justifyContent="center"
                    paddingLeft="30px"
                    paddingRight="30px"
                    onClick={() => addToFavorites(trip._id)} // Agregar a favoritos
                  >
                    Agregar a favoritos
                  </Button>
                </Box>
              </Box>
            </Flex>
          ))}
        </div>
      )}
    </Box>
  );
};

export default TravelCalculator;
