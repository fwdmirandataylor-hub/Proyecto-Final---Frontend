import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registro.css'

function Registro() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    confirmar: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (form.contraseña !== form.confirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const res = await fetch(`http://localhost:3001/usuarios?correo=${form.correo}`);
    const usuarios = await res.json();

    if (usuarios.length > 0) {
      alert('El correo ya está registrado');
      return;
    }

    await fetch('http://localhost:3001/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: form.nombre,
        correo: form.correo,
        contraseña: form.contraseña
      })
    });

    alert('Usuario registrado exitosamente');
    navigate('/Login');
  };

  return (
    <div className='registro-container'>
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />

        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" name="correo" value={form.correo} onChange={handleChange} required />

        <label htmlFor="contraseña">Contraseña:</label>
        <input type="password" id="contraseña" name="contraseña" value={form.contraseña} onChange={handleChange} required />

        <label htmlFor="confirmar">Confirmar contraseña:</label>
        <input type="password" id="confirmar" name="confirmar" value={form.confirmar} onChange={handleChange} required />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;

