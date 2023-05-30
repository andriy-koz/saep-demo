import Percha from './Percha';

const Presentacion = () => {
  return (
    <div className='presentacion'>
      <div className='pr-sensor-a'>A</div>
      <div className='pr-sensor-b'>B</div>
      <div className='pr-sensor-c'>C</div>
      <div className='cadena'>CADENA</div>
      <div className='cabina'>
        <div className='lanza'></div>
        <div className='pistola'></div>
      </div>
      <div className='perchas'>
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
