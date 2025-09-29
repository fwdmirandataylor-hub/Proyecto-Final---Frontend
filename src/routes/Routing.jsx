import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Registro from '../components/Registro';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
