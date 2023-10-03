import React from 'react';
import { useParams } from 'react-router-dom';

const DetalleLibro = ({ libros }) => {
    const { id } = useParams();
    const libro = libros.find(libro => libro.Id === parseInt(id));

    if (!libro) {
        return <div>No existe el libro</div>
    }

    return (
        <div>
            <h2>{libro.titulo}</h2>
            <p>{libro.sinopsis}</p>
            <p>Autor: {libro.autor}</p>
            <p>Precio: {libro.precio}</p>
            <p>Categoria: {libro.categoria}</p>
        </div>
    );
}

export default DetalleLibro;