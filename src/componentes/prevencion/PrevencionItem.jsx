import React from 'react'
import './PrevencionItem.css';

function PrevencionItem() {
  return (
    <>
      <div className='tarjeta'>
        <img className='prevencion-img' src='../imagenes/persona-nerviosa.png' alt='madre protegiendo a su hija'></img>
        <h3 className='titulo-imagen'>Unidos por la vida:</h3>
        <p className='parrafo-imagen'>Prevención del suicidio y construcción de la 
        <br className='br-prevencion'/> esperanza</p>
        <a className='btn btn-lg boton-prev boton--rojo'>Leer más</a>
      </div>
      
    </>
  )
}

export default PrevencionItem