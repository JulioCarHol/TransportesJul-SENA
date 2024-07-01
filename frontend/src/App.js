//src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserPanel from './components/UserPanel';  
import Information from './components/information/index/Information';
import UserFavorites from './components/UserFavorites';
import Antioquia from './components/information/antioquia/Antioquia';
import Boyaca from './components/information/boyaca/Boyaca';

// import PrivateRoute from './components/PrivateRoute';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Information />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-panel" element={<UserPanel />} />
          <Route path="/user-favorites" element={<UserFavorites />} />
          <Route path='/antioquia' element={<Antioquia />} />
          <Route path='/boyaca' element={<Boyaca />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
