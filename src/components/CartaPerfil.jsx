import React, { useState, useEffect } from "react";
import '../styles/CartaPerfil.css';

function CartaPerfil() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [foto, setFoto] = useState(null);
  const [idUsuario, setIdUsuario] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/usuarios")
      .then((res) => res.json())
      .then((data) => {
        const usuario = data[0];
        setCorreo(usuario.correo);
        setFoto(usuario.foto || null);
        setIdUsuario(usuario.id);
      });
  }, []);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const perfilActualizado = {
      id: idUsuario,
      correo,
      contraseña,
      foto
    };

    fetch(`http://localhost:3001/usuarios/${idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(perfilActualizado)
    })
      .then((res) => res.json())
      .then(() => {
        alert("Perfil actualizado 🎉");
      })
      .catch((error) => {
        console.error("Error al actualizar perfil:", error);
        alert("Hubo un error al actualizar el perfil.");
      });
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

        <div className="perfil-datos">
          <label>Correo electrónico:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label>Contraseña:</label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />

          <button type="submit">Guardar cambios</button>
        </div>
      </form>
    </div>
  );
}

export default CartaPerfil;