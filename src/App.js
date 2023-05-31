import { useState } from 'react';

import './App.css';

import Botonera from './components/Botonera';
import DetallesSensores from './components/DetallesSensores';
import EntradasYSalidas from './components/EntradasYSalidas';
import Presentacion from './components/Presentacion';

function App() {
  const [moverCadena, setMoverCadena] = useState(false);

  const iniciar = () => {
    setMoverCadena(true);
  };

  const parar = () => {
    setMoverCadena(false);
  };

  return (
    <div className='App'>
      <div className='header'>
        <EntradasYSalidas />
        <Botonera iniciar={iniciar} parar={parar} />
      </div>
      <DetallesSensores />
      <Presentacion moverCadena={moverCadena} />
    </div>
  );
}

export default App;
