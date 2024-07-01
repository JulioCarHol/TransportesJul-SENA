// src/components/Navbar.js

import React from 'react';
import './styleserv.css';
import { MenuItemOption, MenuOptionGroup, MenuDivider, MenuList, Button, MenuButton } from '@chakra-ui/react';
//import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu } from '@chakra-ui/react';
//import { Button } from '@chakra-ui/react';
import { Portal } from '@chakra-ui/react';
import { MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (

<>
  <nav className="navbar">
    <Link to="/" className="logo">Turismo por Colombia</Link>
    <div className="nav-links">
        <ul>
            <li><a><Link to='/antioquia'>ANTIOQUIA</Link></a></li>
            <li><Link to='/boyaca'>BOYACÁ</Link></li>
            <li><a>BUSCAR VIAJES</a></li>
            <li><a>CONTÁCTANOS</a></li>                
        </ul>
    </div>
<Menu>
  <MenuButton><Button colorScheme='yellow'>Iniciar Sesion</Button></MenuButton>
  <Portal>
    <MenuList px={0.1}>
      <MenuItem>
      <Link to="/login">
       <Button colorScheme='gray' px="9">Ingresar Usuario</Button>
       </Link>
       </MenuItem>

      <MenuItem>        
      <Link to="/register">
          <Button colorScheme='teal' px="12">Crear Usuario</Button>
        </Link></MenuItem>
    </MenuList>
  </Portal>
</Menu>
</nav>

</>
  );
}

export default Navbar;
