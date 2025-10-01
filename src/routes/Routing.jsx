import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Registro from '../components/Registro';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Productos from '../pages/Productos';
import Publicar from '../pages/Publicar';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Publicar" element={<Publicar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
