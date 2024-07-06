import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import '../css/styles-antioquia.css'
import imageDescription from '../antioquia/images/antioquia_descripcion.webp';
import image1 from '../antioquia/images/antioquia_turismo.jpg'
import image2 from '../antioquia/images/antioquia_turismo2.jpg'
import image3 from '../antioquia/images/antioquia_turismo3.jpg'
import { Box, Badge, Image, Flex, SimpleGrid } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';


function Antioquia() {
    const property = {
        imageUrl1: image1,
        imageAlt1: 'Piedra del Peñol',
        title1: 'Piedra del Peñol',
        rating1: 5,

        imageUrl2: image2,
        imageAlt2: 'Comuna 13 Medellin',
        title2: 'Comuna 13 Medellin',
        rating2: 5,

        imageUrl3: image3,
        imageAlt3: 'Tour del Café',
        title3: 'Tour del Café',
        rating3: 5,
      }

  return (
    <>
<Navbar />
<div className="bannerservices antioquia">
  
</div>
<div className="inicio-descripcion">
    <div className="texto-inicio-descripcion">
      <h1>
        Explora la belleza natural, la cultura vibrante y la historia apasionante de Antioquia.
      </h1>
      <p>
        Es un departamento que se caracteriza por su pujanza, su alegría y su diversidad. Desde la imponente cordillera
        de los Andes hasta las playas del mar Caribe, Antioquia ofrece una variedad de paisajes y experiencias para
        todos los gustos.
      </p>
    </div>
    <div className="imagen-inicio-descripcion">
      <img src={imageDescription} alt="inicio-descripcion" className="img-inicio-descripcion" />
    </div>
  </div>

  <div className="inicio-populares">
  
    <Flex display='flex' width='auto' justifyContent="center" mt='10' mb='20' >

<SimpleGrid columns={3} spacing={20} minChildWidth='200px' display="flex"  >

  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="white">
      <Image src={property.imageUrl1} alt={property.imageAlt1} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
          Guatapé - Antioquia
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
          {property.title1}
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating1 ? 'teal.500' : 'gray.300'}
              />
            ))}
        </Box>
      </Box>
    </Box>
 
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="white">
      <Image src={property.imageUrl2} alt={property.imageAlt2} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
          Medellin - Antioquia
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
          {property.title2}
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating2 ? 'teal.500' : 'gray.300'}
              />
            ))}
        </Box>
      </Box>
    </Box>



   <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="white">
      <Image src={property.imageUrl3} alt={property.imageAlt3} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
          Antioquia
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
          {property.title3}
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating3 ? 'teal.500' : 'gray.300'}
              />
            ))}
        </Box>
      </Box>
    </Box>

</SimpleGrid>
</Flex>
    
  </div>
  <Footer />

    </>
  )
}

export default Antioquia