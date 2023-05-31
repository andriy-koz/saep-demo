import Percha from './Percha';

const Presentacion = ({ moverCadena }) => {
  const mover = moverCadena ? 'mover' : '';

  return (
    <div className='presentacion'>
      <div className={`pr-sensor-a ${mover}`}>A</div>
      <div className={`pr-sensor-b ${mover}`}>B</div>
      <div className='pr-sensor-c'>C</div>
      <div className='cadena'>CADENA</div>
      <div className='cabina'>
        <div className={`lanza ${mover}`}></div>
        <div className={`pistola ${mover}`}></div>
      </div>
      <div className={`perchas ${mover}`}>
        <Percha pieza='vacio' />
        <Percha pieza='vacio' />
        <Percha pieza='vacio' />
        <Percha pieza='tacho' />
        <Percha pieza='fondo' />
        <Percha pieza='vacio' />
        <Percha pieza='fondo' />
        <Percha pieza='tacho' />
        <Percha pieza='vacio' />
        <Percha pieza='vacio' />
      </div>
    </div>
  );
};

export default Presentacion;
