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
        <div>
            <div className='titulo'>
                <h1>Bienvenido a SwapBook 📚</h1>
            </div>
            <div className='login-container'>
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo electrónico:</label><br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    /><br /><br />

                    <label htmlFor="password">Contraseña:</label><br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    /><br /><br />

                    <button type="submit">Entrar</button>
                </form>
                <div className='cuenta'>
                    <Link to="/registro">Crear cuenta</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
