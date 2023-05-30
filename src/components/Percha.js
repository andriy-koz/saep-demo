const Percha = ({ pieza }) => {
  return (
    <div className='percha'>
      <div className='carro'></div>
      <div className='varilla'>
        <div className='giro'></div>
      </div>
      <div className='pieza'>
        <div className={pieza}></div>
      </div>
    </div>
  );
};

export default Percha;
