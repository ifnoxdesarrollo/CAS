import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <div className='text-center contacto'>
      <div className='contenedor'>
        <h2 className='contacto-titulo mb-0 mb-sm-4 mt-5 mt-sm-0'>
          CAS
        </h2>
        <p className='text-center parrafo-contacto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="iconos">
          <i className="bi bi-whatsapp icono"></i>
          <i className="bi bi-facebook icono"></i>
          <i className="bi bi-phone icono"></i>
          <i className="bi bi-whatsapp icono"></i>
          <i className="bi bi-whatsapp icono"></i>
        </div>
      </div>
    </div>
  )
}

export default Contacto