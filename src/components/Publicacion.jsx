import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Publicacion.css';

function Publicacion() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [fecha, setFecha] = useState('');
    const [estado, setEstado] = useState('');
    const [imagen, setImagen] = useState('');
    const [preview, setPreview] = useState(null);

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagen(reader.result); // base64
            setPreview(reader.result); // vista previa
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevaPublicacion = {
            titulo,
            autor,
            genero,
            fecha,
            estado,
            imagen,
        };

        try {
            const res = await fetch('http://localhost:3001/publicaciones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevaPublicacion),
            });

            if (!res.ok) throw new Error('Error al publicar');

            await res.json();

            // Limpiar campos
            setTitulo('');
            setAutor('');
            setGenero('');
            setFecha('');
            setEstado('');
            setImagen('');
            setPreview(null);

            // Redirigir a Home
            navigate('/home');
        } catch (error) {
            console.error('Error al publicar:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleImageChange} required />
            {preview && (
                <img
                    src={preview}
                    alt="Vista previa"
                    style={{
                        width: '100%',
                        maxHeight: '200px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                    }}
                />
            )}
            <input
                type="text"
                placeholder="Nombre del libro"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Género"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Fecha de lanzamiento"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
            />
            <select value={estado} onChange={(e) => setEstado(e.target.value)} required>
                <option value="">Estado del libro</option>
                <option value="Nuevo">Nuevo</option>
                <option value="Usado - Como nuevo">Usado - Como nuevo</option>
                <option value="Usado - Buen estado">Usado - Buen estado</option>
                <option value="Usado - Aceptable">Usado - Aceptable</option>
            </select>
            <button type="submit">Publicar</button>
        </form>
    );
}

export default Publicacion;