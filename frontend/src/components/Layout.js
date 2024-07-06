// src/components/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Sidebar>
        {children}
      </Sidebar>
    </div>
  );
};

export default Layout;
