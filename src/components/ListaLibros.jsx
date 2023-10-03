import React from 'react';
// dicho componente debe mostrar listado de libro que se encuentra en el archivo ./data/libros.js

import { Link } from 'react-router-dom';

// crear el componente
const ListaLibros = ({ libros }) => {

  return (
    <div>
        <h2>Libros</h2>
        <Link to="/libros/crear">Crear Libro</Link>
      <ul>
        {libros.map((libro) => (
          <li key={libro.Id}>
            {libro.Titulo}
            <Link to={`/libros/${libro.Id}`}>Ver más</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaLibros;