import React from 'react'
import './PrevencionItem.css';

function PrevencionItem() {
  return (
    <>
      <div className='tarjeta'>
        <img className='prevencion-img mt-4' src='../imagenes/mujeres-paraguas.png' alt='madre protegiendo a su hija'></img>
        <h3 className='titulo-imagen'>Título</h3>
        <p className='parrafo-imagen'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed autem eius ipsum, incidunt earum voluptate animi vitae unde!.</p>
        <a className='btn btn-lg boton boton--rojo'>Leer más</a>
      </div>
      <div className='tarjeta'>
        <img className='prevencion-img mt-4' src='../imagenes/corazon-manos.png' alt='muchas manos pintadas arman corazon'></img>
        <h3 className='titulo-imagen'>Título</h3>
        <p className='parrafo-imagen'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed autem eius ipsum, incidunt earum voluptate animi vitae unde!.</p>
        <a className='btn btn-lg boton boton--rojo'>Leer más</a>
      </div>
      <div className='tarjeta'>
        <img className='prevencion-img mt-4' src='../imagenes/infancias-ayudando.png' alt='nena ayudando a nene a levantarse'></img>
        <h3 className='titulo-imagen'>Título</h3>
        <p className='parrafo-imagen'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed autem eius ipsum, incidunt earum voluptate animi vitae unde!.</p>
        <a className='btn btn-lg boton boton--rojo'>Leer más</a>
      </div>
    </>
  )
}

export default PrevencionItem