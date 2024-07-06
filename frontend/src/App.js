// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserPanel from './components/UserPanel';
import Information from './components/information/index/Information';
import UserFavorites from './components/UserFavorites';
import Antioquia from './components/information/antioquia/Antioquia';
import Boyaca from './components/information/boyaca/Boyaca';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/Layout'; // Importa el nuevo componente Layout

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <AdminDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-panel"
          element={
            <ProtectedRoute>
              <Layout>
                <UserPanel />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-favorites"
          element={
            <ProtectedRoute>
              <Layout>
                <UserFavorites />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="/antioquia" element={<Antioquia />} />
        <Route path="/boyaca" element={<Boyaca />} />
      </Routes>
    </Router>
  );
}

export default App;
