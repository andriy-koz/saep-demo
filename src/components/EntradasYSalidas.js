import { useEffect, useState } from 'react';

const EntradasYSalidas = ({ mover }) => {
  const [sa, setSa] = useState('');
  const [sb, setSb] = useState('');
  const [sc, setSc] = useState('');
  const [sra, setSra] = useState('');
  const [srb, setSrb] = useState('');
  const [ma, setMa] = useState('');
  const [ra, setRa] = useState('');
  const [rb, setRb] = useState('');

  useEffect(() => {
    setSa('bg');
    setSb('bg');
    setSra('bg');
    setSrb('bg');
    setMa('bg');

    if (mover) {
      setTimeout(() => setSa(''), 7.2 * 1000);
      setTimeout(() => setSa('bg'), 14.7 * 1000);
      setTimeout(() => setSa(''), 22.2 * 1000);

      setTimeout(() => setSb(''), 14.7 * 1000);

      setTimeout(() => setSc('bg'), 3.34 * 1000);
      setTimeout(() => setSc(''), 3.8 * 1000);
      setTimeout(() => setSc('bg'), 5.46 * 1000);
      setTimeout(() => setSc(''), 5.86 * 1000);
      setTimeout(() => setSc('bg'), 12.25 * 1000);
      setTimeout(() => setSc(''), 12.65 * 1000);
      setTimeout(() => setSc('bg'), 13.6 * 1000);
      setTimeout(() => setSc(''), 14 * 1000);
      setTimeout(() => setSc('bg'), 19.75 * 1000);
      setTimeout(() => setSc(''), 20.05 * 1000);
      setTimeout(() => setSc('bg'), 21.1 * 1000);
      setTimeout(() => setSc(''), 21.5 * 1000);
      setTimeout(() => setSc('bg'), 26.7 * 1000);
      setTimeout(() => setSc(''), 27.1 * 1000);
      setTimeout(() => setSc('bg'), 27.5 * 1000);
      setTimeout(() => setSc(''), 27.9 * 1000);

      setTimeout(() => setSra(''), 7.8 * 1000);
      setTimeout(() => setSra('bg'), 10.9 * 1000);
      setTimeout(() => setSra(''), 22.9 * 1000);
      setTimeout(() => setSra('bg'), 26 * 1000);

      setTimeout(() => setSrb(''), 7.8 * 1000);
      setTimeout(() => setSrb('bg'), 10.9 * 1000);
      setTimeout(() => setSrb(''), 15.2 * 1000);
      setTimeout(() => setSrb('bg'), 18.3 * 1000);

      setTimeout(() => setMa(''), 7.24 * 1000);
      setTimeout(() => setMa('bg'), 10.12 * 1000);
      setTimeout(() => setMa(''), 15 * 1000);
      setTimeout(() => setMa('bg'), 18.7 * 1000);
      setTimeout(() => setMa(''), 22.7 * 1000);
      setTimeout(() => setMa('bg'), 26.2 * 1000);

      setTimeout(() => setRa('bg'), 7.8 * 1000);
      setTimeout(() => setRa(''), 10.9 * 1000);
      setTimeout(() => setRa('bg'), 22.9 * 1000);
      setTimeout(() => setRa(''), 26 * 1000);

      setTimeout(() => setRb('bg'), 7.8 * 1000);
      setTimeout(() => setRb(''), 10.9 * 1000);
      setTimeout(() => setRb('bg'), 15.2 * 1000);
      setTimeout(() => setRb(''), 18.3 * 1000);
    }
  }, [mover]);

  return (
    <div className='entradas-salidas'>
      <div>
        <h4>ENTRADAS</h4>
        <ul>
          <div>
            <li>Pulsador de Inicio</li>
            <li>Parada de Emergencia</li>
            <li className={sc}>Sensor de Carritos</li>
            <li className={sa}>Sensor Pieza A</li>
          </div>
          <div>
            <li className={sb}>Sensor Pieza B</li>
            <li className={sra}>Sensor Reciprocador A</li>
            <li className={srb}>Sensor Reciprocador B</li>
            <li>Pulsador de Calibración</li>
          </div>
        </ul>
      </div>
      <div>
        <h4>SALIDAS</h4>
        <ul>
          <div>
            <li className={ma}>Motor de Avance</li>
            <li className={ra}>Reciprocador A</li>
            <li className={rb}>Reciprocador B</li>
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
