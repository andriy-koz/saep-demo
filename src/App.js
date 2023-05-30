import './App.css';

import Botonera from './components/Botonera';
import DetallesSensores from './components/DetallesSensores';
import EntradasYSalidas from './components/EntradasYSalidas';
import Presentacion from './components/Presentacion';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <EntradasYSalidas />
        <Botonera />
      </div>
      <DetallesSensores />
      <Presentacion />
    </div>
  );
}

export default App;
