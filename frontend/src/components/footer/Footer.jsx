import { Flex, Link, Text, Container, VStack, useColorModeValue } from '@chakra-ui/react';

const footerData = [
  {
    label: 'Regiones',
    href: '#',
    links: [
      { label: 'Bogota', href: '#' },
      { label: 'Medellin', href: '#' },
      { label: 'Cali', href: '#' },
      { label: 'Barranquilla', href: '#' },
      { label: 'Cartagena', href: '#' },
      { label: 'Santa Marta', href: '#' },
      { label: 'Bucaramanga', href: '#' },
      { label: 'Cúcuta', href: '#' }

    ]
  },
  {
    label: 'Transportadoras',
    href: '#',
    links: [
      { label: 'Copetran', href: '#' },
      { label: 'Expreso Brasilia', href: '#' },
      { label: 'Flota Magdalena', href: '#' },
      { label: 'Expreso Bolivariano', href: '#' },
      { label: 'Rápido Ochoa', href: '#' },
      { label: 'Transportes Omega', href: '#' },
      { label: 'Cootranshuila', href: '#' }
    ]
  },
  {
    label: 'Acerca',
    href: '#',
    links: [
      { label: 'Sobre mi', href: '#' }
    ]
  },
  {
    label: 'Contacto',
    href: '#',
    links: [
      { label: 'Email', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Linkedin', href: '#' },
    ]
  }
];

const Footer = () => {
  const linkColor = useColorModeValue('yellow.800', 'yellow.300');

  return (
    
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
  
      <VStack spacing={5} alignItems="initial">
        <Flex
          flexWrap="wrap"
          direction={{ base: 'column', md: 'row' }}
          alignItems="start"
          justifyContent="space-between"
        >
          {footerData.map((data, index) => (
            <Flex key={index} direction="column" mb="3">
              <Link
                fontWeight="500"
                href={data.href}
                color={linkColor}
              >
                {data.label}
              </Link>
              <Flex direction={{ base: 'row', md: 'column' }}>
                {data.links.map((link, index) => (
                  <Link
                    key={index}
                    padding={1}
                    fontSize={{ base: 'sm', sm: 'md' }}
                    href={link.href}
                    mr={{ base: 1, sm: 2, md: 0 }}
                    color="gray.500"
                    _hover={{ color: 'yellow.600' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex alignItems="center">
          <Text color="gray.500" fontSize="0.875rem" pl="0.5rem">
            Proyecto Final - Tecnico Programacion de Software - SENA 2024
          </Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Footer;
