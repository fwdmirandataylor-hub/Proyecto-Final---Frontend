import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigate.css';

function Navigate() {
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li><Link to="/Publicar">Publicar un libro</Link></li>
                <li><Link to="/home">Inicio</Link></li>
                <li><Link to="/Perfil">Mi Perfil</Link></li>
                <li><Link to="/">Cerrar sesión</Link></li>
            </ul>
        </nav>
    );
}

export default Navigate;

