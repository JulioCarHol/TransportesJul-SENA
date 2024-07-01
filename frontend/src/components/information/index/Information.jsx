import React from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import '../css/styles-index.css'
import image0 from './images/inicio-descripcion.jpg'
import image1 from './images/inicio-populares-1.webp'
import image2 from './images/inicio-populares-2.jpg'
import image3 from './images/inicio-populares-3.jpg'
import { Box, Badge, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
import { Flex } from "@chakra-ui/react"
import { SimpleGrid } from '@chakra-ui/react'

function Information(){
    const property = {
        imageUrl1: image1,
        imageAlt1: 'Cartagena de Indias',
        title1: 'Cartagena de Indias',
        rating1: 5,

        imageUrl2: image2,
        imageAlt2: 'Parque Nacional Tayrona',
        title2: 'Parque Nacional Tayrona',
        rating2: 5,

        imageUrl3: image3,
        imageAlt3: 'Caño Cristales',
        title3: 'Caño Cristales',
        rating3: 5,
      }
    return(
        <>
        <Navbar />
        <div className="bannerservices component1">
  
  </div>
        <div className="inicio-descripcion">
    <div className="texto-inicio-descripcion">
      <h1>
      Sumérgete en un mundo de experiencias únicas y paisajes asombrosos
      </h1>
      <p>
      Colombia, un país lleno de contrastes, diversidad
        cultural y una riqueza natural que te dejará sin aliento. Desde las
        playas paradisíacas en el Caribe hasta las cumbres nevadas de la
        Sierra Nevada, pasando por la exuberante selva amazónica y los pueblos
        coloniales llenos de historia, Colombia ofrece una variedad de
        experiencias que cautivarán tus sentidos.
      </p>
    </div>
    <div className="imagen-inicio-descripcion">
      <img src={image0} alt="inicio-descripcion" className="img-inicio-descripcion" />
    </div>
  </div>


      
<Flex display='flex' width='auto' justifyContent="center" mt='10' mb='20'>

<SimpleGrid columns={3} spacing={20} minChildWidth='200px' display="flex"  >

  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl1} alt={property.imageAlt1} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Caribe
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
            Caribe
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
            Orinoquia
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

        <Footer />
        </>
      
        
    )
}


export default Information;