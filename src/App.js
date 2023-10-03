


import './App.css';
import ListaLibros from './components/ListaLibros';
import DetalleLibro from './components/DetalleLibro';
import FormularioCrearLibro from './components/FormularioCrearLibro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {libros} from './data/libros.js'
function App() {
  
  return (
    // Agregar componente Lista Libros
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaLibros libros={libros} />} />
        <Route path="/libros/:id" element={<DetalleLibro libros={libros} />} />
        <Route path="/libros/crear" element={<FormularioCrearLibro/>} />
      </Routes>
      </BrowserRouter>
    </div>
      );
    }
    

export default App;