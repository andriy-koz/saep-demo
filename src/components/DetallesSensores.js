const DetallesYSensores = ({ contador, mover }) => {
  const animar = mover ? 'mover' : '';

  return (
    <div className='detalles-sensores'>
      <div className={`sensor-a ${animar}`}>Sensor A</div>
      <div className={`sensor-b ${animar}`}>Sensor B</div>
      <div className={`contador ${animar}`}>
        Sensor C<div>{contador}</div>
      </div>
    </div>
  );
};

export default DetallesYSensores;
