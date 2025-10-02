import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:3001/usuarios?correo=${email}&contraseña=${password}`);
        const usuarios = await res.json();

        if (usuarios.length > 0) {
            navigate('/home');
        } else {
            alert('Correo o contraseña incorrectos');
        }
    };

    return (
        <>
            <div className="page-header">
                <h1>Bienvenido a SwapBook 📚</h1>
            </div>

            <div className="login-wrapper">
                <div className="login-container">
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit">Entrar</button>

                        <div className="cuenta">
                            <Link to="/registro">Crear cuenta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;