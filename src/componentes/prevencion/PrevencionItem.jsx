import React from 'react'
import './PrevencionItem.css';

function PrevencionItem() {
  return (
    <>
      <div className='tarjeta'>
        <img className='prevencion-img mt-4' src='/img.jpg' alt='img'></img>
        <h3 className='titulo-imagen'>Título</h3>
        <p className='parrafo-imagen'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed autem eius ipsum, incidunt earum voluptate animi vitae unde!.</p>
        <a className='btn btn-lg boton'>Leer más</a>
      </div>
    </>
  )
}

export default PrevencionItem