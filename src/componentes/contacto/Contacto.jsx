import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <div className='text-center contacto'>
      <div className='contenedor'>
        <h2 className='contacto-titulo'>
          CAS
        </h2>
        <p className='text-center parrafo-contacto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="iconos">
          <a href="https://www.instagram.com/cas.mendoza.1" target='_blank'>
            <i className="bi bi-instagram icono"></i></a>
          <a href="mailto:cas.mendoza.argentina@gmail.com" target='_blank'>
            <i className="bi bi-envelope icono"></i></a>
          <a href="https://www.facebook.com/asistenciaalsuicidaMza" target='_blank'>
            <i className="bi bi-facebook icono"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contacto