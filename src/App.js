import { useEffect, useState } from 'react';

import './App.css';

import Botonera from './components/Botonera';
import DetallesSensores from './components/DetallesSensores';
import EntradasYSalidas from './components/EntradasYSalidas';
import Presentacion from './components/Presentacion';

function App() {
  const [moverCadena, setMoverCadena] = useState(false);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (moverCadena) {
      setTimeout(() => setContador(1), 3.34 * 1000);
      setTimeout(() => setContador(2), 5.46 * 1000);
      setTimeout(() => setContador(0), 7.7 * 1000);
      setTimeout(() => setContador(1), 12.25 * 1000);
      setTimeout(() => setContador(2), 13.6 * 1000);
      setTimeout(() => setContador(0), 14.9 * 1000);
      setTimeout(() => setContador(1), 19.75 * 1000);
      setTimeout(() => setContador(2), 21.1 * 1000);
      setTimeout(() => setContador(0), 22.6 * 1000);
      setTimeout(() => setContador(1), 26.7 * 1000);
      setTimeout(() => setContador(2), 27.5 * 1000);
    }
  }, [moverCadena]);

  const iniciar = () => {
    setMoverCadena(true);
  };

  const parar = () => {
    setMoverCadena(false);
  };

  return (
    <div className='App'>
      <div className='header'>
        <EntradasYSalidas mover={moverCadena} />
        <Botonera iniciar={iniciar} parar={parar} />
      </div>
      <DetallesSensores contador={contador} mover={moverCadena} />
      <Presentacion moverCadena={moverCadena} />
    </div>
  );
}

export default App;
