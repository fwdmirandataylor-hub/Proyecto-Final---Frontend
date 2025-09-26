import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigate.css';

function Navigate() {
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li><Link to="/home">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/perfil">Mi Perfil</Link></li>
                <li><Link to="/">Cerrar sesión</Link></li>
            </ul>
        </nav>
    );
}

export default Navigate;

