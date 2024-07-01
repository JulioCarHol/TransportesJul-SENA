import React from 'react';
import image1 from './images/inicio-descripcion.jpg'

export default function Information1(){

    return(
<>
<div className="containerevalpsi">
    <div className="imgevalpsi">
    <img alt="" src={image1} />
    </div>
    <div className="containertexteval">
        <h1 className="titleevalpsi">Sumérgete en un mundo de experiencias únicas y paisajes asombrosos</h1>
        <div className="textevalpsi"> Colombia, un país lleno de contrastes, diversidad
        cultural y una riqueza natural que te dejará sin aliento. Desde las
        playas paradisíacas en el Caribe hasta las cumbres nevadas de la
        Sierra Nevada, pasando por la exuberante selva amazónica y los pueblos
        coloniales llenos de historia, Colombia ofrece una variedad de
        experiencias que cautivarán tus sentidos.
        </div>
    </div>
</div>




<Flex display='flex' width='auto' justifyContent="center" mt='60' >

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


</>


    );
        

    
}

