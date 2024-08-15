import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
//import Customers from './components/Customers';
import Orders from './components/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//<Route path="/customers" element={<Customers />} />