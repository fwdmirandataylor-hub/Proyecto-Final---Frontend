import React, { useState } from "react";
import '../styles/CartaPerfil.css';

function CartaPerfil() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [foto, setFoto] = useState(null);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Perfil actualizado 🎉");
  };

  return (
    <div className="carta-perfil">
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="foto-perfil">
          <img src={foto || "/default-avatar.png"} alt="Foto de perfil" />
          <label className="cambiar-foto">
            Cambiar foto
            <input type="file" accept="image/*" onChange={handleFotoChange} />
          </label>
        </div>

        <label>Nombre de usuario</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default CartaPerfil

