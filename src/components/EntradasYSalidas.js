const EntradasYSalidas = () => {
  return (
    <div className='entradas-salidas'>
      <div>
        <h4>ENTRADAS</h4>
        <ul>
          <div>
            <li>Pulsador de Inicio</li>
            <li>Parada de Emergencia</li>
            <li>Sensor de Carritos</li>
            <li>Sensor Pieza A</li>
          </div>
          <div>
            <li>Sensor Pieza B</li>
            <li>Sensor Reciprocador A</li>
            <li>Sensor Reciprocador B</li>
            <li>Pulsador de Calibración</li>
          </div>
        </ul>
      </div>
      <div>
        <h4>SALIDAS</h4>
        <ul>
          <div>
            <li>Motor de Avance</li>
            <li>Reciprocador A</li>
            <li>Reciprocador B</li>
            <li>Pistola A</li>
          </div>
          <div>
            <li>Pistola B</li>
            <li>Acople Sistema Giro</li>
            <li>Motor Sistema de Giro</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default EntradasYSalidas;
