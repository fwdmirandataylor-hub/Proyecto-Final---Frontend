import React from 'react'
import '../styles/Login.css'

function Login() {
    return (
        <div>

            <div className='login-container'>

                <h2>Iniciar Sesión</h2>
                <form action="/login" method="POST">
                    <label for="email">Correo electrónico:</label><br />
                    <input type="email" id="email" name="email" required /><br /><br />

                    <label for="password">Contraseña:</label><br />
                    <input type="password" id="password" name="password" required /><br /><br />

                    <button type="submit">Entrar</button>
                </form>

            </div>


        </div>
    )
}

export default Login
