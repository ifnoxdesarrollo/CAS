import React from 'react'
import './Prevencion.css';

function PrevencionItem() {
  return (
    <>
      <div className='card'>
        <img className='prevencion-img mt-4' src='/img.jpg' alt='img'></img>
        <h3 className='titulo-imagen'>Título</h3>
        <p className='parrafo-imagen'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
        <a className='btn btn-lg boton'>Leer más</a>
      </div>
    </>
  )
}

export default PrevencionItem