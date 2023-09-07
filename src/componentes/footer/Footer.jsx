import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-contenedor">
          <h4 className='footer-texto-sup'>
            <a href="">Políticas de privacidad.</a> 
            <span className="separador"></span>
            <a href="">Términos del servicio.</a>
          </h4>
          <h4 className='footer-texto-sup'>© 2023 CAS. Todos los Derechos Reservados.</h4>
      </div>
      <div className="footer-contenedor-logo">
          <h4 className='footer-texto-inf'>Desarrollado por</h4>
          <a href="https://www.futbolred.com/files/article_main/uploads/2023/08/15/64dc424a6c2af.jpeg"><img className='footer-logo' src='../../../imagenes/If_Nox-logo.svg' alt="Logo If Nox Desarrollo Web" /></a>
      </div>
    </div>
  )
}

export default Footer