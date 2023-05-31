const Botonera = ({ iniciar, parar }) => {
  return (
    <div className='botonera-contenedor'>
      <h3>Botonera</h3>
      <div className='botonera'>
        <div className='botonera-boton'>
          <h4>INICIO</h4>
          <div className='btn-inicio' onClick={iniciar}></div>
        </div>
        <div className='botonera-boton' onClick={parar}>
          <h4>PARADA</h4>
          <div className='btn-parada'></div>
        </div>
        <div className='botonera-boton'>
          <h4>CALIBRAR</h4>
          <div className='btn-calibrar'></div>
        </div>
      </div>
    </div>
  );
};

export default Botonera;
