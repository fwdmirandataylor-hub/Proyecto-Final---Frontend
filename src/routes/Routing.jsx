import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Registro from '../components/Registro';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

