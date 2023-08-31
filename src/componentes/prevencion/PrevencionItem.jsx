import React from 'react'
import './Prevencion.css';

function PrevencionItem() {
  return (
    <>
      <div className='card'>
        <img className='prevencion-img mt-4' src='/img.jpg' alt='img'></img>
        <h3 className='titulo-imagen'>Unidos por la Vida:</h3>
        <p className='parrafo-imagen'>Prevención del Suicidio y Construcción de la Esperanza.</p>
        <a className='btn btn-lg boton'>Leer más</a>
      </div>
    </>
  )
}

export default PrevencionItem