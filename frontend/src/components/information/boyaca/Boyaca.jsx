import { useState, useEffect, React } from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import '../css/syles-boyaca.css';
import imageDescription from '../boyaca/images/boyaca-description.jpg';
import { Box, Badge, Image, Flex, SimpleGrid } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import axios from 'axios';

function Boyaca() {
  const [boyacaData, setBoyacaData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/region-boyaca')
      .then(response => setBoyacaData(response.data))
      .catch(error => console.error('Error al obtener los datos de Boyacá:', error));
  }, []);

  if (!boyacaData) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bannerservices boyaca"></div>
      <div className="inicio-descripcion">
        <div className="texto-inicio-descripcion">
          <h1>Descubre la magia de Boyacá</h1>
          <p>
            Ubicado en el corazón de Colombia, es un departamento que lo tiene todo: historia, cultura, naturaleza y
            aventura. Desde el imponente Páramo de Pisba hasta las verdes llanuras del Casanare, Boyacá ofrece una
            variedad de paisajes para todos los gustos.
          </p>
        </div>
        <div className="imagen-inicio-descripcion">
          <img src={imageDescription} alt="inicio-descripcion" className="img-inicio-descripcion" />
        </div>
      </div>

      <div className="inicio-populares">
        <Flex display='flex' width='auto' justifyContent="center" mt='10' mb='20'>
          <SimpleGrid columns={3} spacing={20} minChildWidth='200px' display="flex">
            {boyacaData.popularPlaces.map((place) => (
              <Box key={place._id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="white">
                <Image src={place.imageUrl} alt={place.imageAlt} />
                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      Boyacá
                    </Badge>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {place.title}
                  </Box>
                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < place.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </div>
      <Footer />
    </>
  );
}

export default Boyaca;
