import React from 'react';
import '../styles/Login.css';

function Registro() {
    return (
        <div className="login-container">
            <h2>Crear cuenta</h2>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="confirmar">Confirmar contraseña:</label>
                <input type="password" id="confirmar" name="confirmar" required />

                <button type="submit">Registrarse</button>
            </form>
        </div>

    );
}

export default Registro;