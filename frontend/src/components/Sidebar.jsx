import React from "react";
import {
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaClipboardCheck } from "react-icons/fa";

import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const navItemColor = useColorModeValue("inherit", "gray.400");
  const navItemHoverBg = useColorModeValue("gray.100", "gray.900");
  const navItemHoverColor = useColorModeValue("gray.900", "gray.200");
  const iconHoverColor = useColorModeValue("gray.600", "gray.300");

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={navItemColor}
        _hover={{
          bg: navItemHoverBg,
          color: navItemHoverColor,
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: iconHoverColor,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
          textAlign="center"
        >
          Viajando por Colombia
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}>
            <Link>Inicio</Link>
        </NavItem>
        <NavItem icon={HiCollection}>
            <Link to="/user-panel">Consultar</Link></NavItem>
        <NavItem icon={FaClipboardCheck}>
            <Link to="/user-favorites">Favoritos</Link></NavItem>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Mi cuenta
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={integrations.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl="12" py="2">
            Ajustes
          </NavItem>
          <NavItem pl="12" py="2" >
            <Link to="/login">Cerrar sesion</Link>
          </NavItem>
        </Collapse>
      </Flex>
    </Box>
  );

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue("white", "gray.800")}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          h="14"
        >
        </Flex>

        <Box as="main" p="4">
          {children}
        </Box>

      </Box>
    </Box>
  );
};

export default Sidebar;
