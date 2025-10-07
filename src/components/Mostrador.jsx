import React, { useEffect, useState } from 'react'
import '../styles/Mostrador.css'

function Mostrador() {
    const [libros, setLibros] = useState([])

    async function mostrarLibro() {
        const peticion = await fetch("http://localhost:3001/publicaciones", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const respuesta = await peticion.json()
        console.log(respuesta)
        setLibros(respuesta)
        return respuesta
    }

    useEffect(() => {
        mostrarLibro()
    }, [])

    return (
        <div className='mostrador'>
            <ul className="lista-libros">
                {libros.map((libro, index) => (
                    <li className="tarjeta-libro" key={index}>
                        <h3>{libro.titulo}</h3>
                        <p><strong>Autor:</strong> {libro.autor}</p>
                        <p><strong>Género:</strong> {libro.genero}</p>
                        <p><strong>Fecha:</strong> {libro.fecha}</p>
                        <p><strong>Estado:</strong> {libro.estado}</p>
                        <img src={libro.imagen} alt={libro.titulo} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Mostrador
