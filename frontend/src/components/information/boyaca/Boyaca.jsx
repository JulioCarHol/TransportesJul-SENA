import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import '../css/syles-boyaca.css'
import imageDescription from '../boyaca/images/boyaca-description.jpg';
import image1 from '../boyaca/images/boyaca-populares-1.webp'
import image2 from '../boyaca/images/boyaca-populares-2.webp'
import image3 from '../boyaca/images/boyaca-populares-3.jpg'
import { Box, Badge, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
import { Flex } from "@chakra-ui/react"
import { SimpleGrid } from '@chakra-ui/react'

function Boyaca() {
    const property = {
        imageUrl1: image1,
        imageAlt1: 'Puente de Boyacá',
        title1: 'Puente de Boyacá',
        rating1: 5,

        imageUrl2: image2,
        imageAlt2: 'Laguna de Tota',
        title2: 'Laguna de Tota',
        rating2: 5,

        imageUrl3: image3,
        imageAlt3: 'Villa de Leyva',
        title3: 'Villa de Leyva',
        rating3: 5,
      }

  return (
    <>
<Navbar />
<div className="bannerservices boyaca">
  
</div>
<div className="inicio-descripcion">
    <div className="texto-inicio-descripcion">
      <h1>
      Descubre la magia de Boyacá
      </h1>
      <p>
      Ubicado en el corazón de Colombia, es un departamento que lo tiene todo: historia, cultura, naturaleza y
        aventura. Desde el imponente Páramo de Pisba hasta las verdes llanuras del Casanare, Boyacá ofrece una variedad
        de paisajes para todos los gustos.
      </p>
    </div>
    <div className="imagen-inicio-descripcion">
      <img src={imageDescription} alt="inicio-descripcion" className="img-inicio-descripcion" />
    </div>
  </div>

  <div className="inicio-populares">
    <div>
      <h1>Mas Populares</h1>
    </div>
    
    <Flex display='flex' width='auto' justifyContent="center" mt='10' mb='20' >

<SimpleGrid columns={3} spacing={20} minChildWidth='200px' display="flex"  >

  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl1} alt={property.imageAlt1} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
          Ventaquemada - Boyacá
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
 
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl2} alt={property.imageAlt2} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
          Tota - Boyacá
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



   <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl3} alt={property.imageAlt3} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
          Villa de Leyva - Boyacá
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

export default Boyaca