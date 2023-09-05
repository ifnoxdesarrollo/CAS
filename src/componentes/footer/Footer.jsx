import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-contenedor">
          <h4 className='footer-texto'>
            <a href="">Políticas de privacidad.</a> 
            <a href="">Términos del servicio.</a>
          </h4>
          
          <h4 className='footer-texto'>© 2023 CAS. Todos los Derechos Reservados.</h4>
      </div>
          <h4 className='footer-texto'>Desarrollado por:</h4>
          <a href=""><img className='footer-logo' src='../../../imagenes/If_Nox-logo.svg' alt="Logo If Nox Desarrollo Web" /></a>
      </div>
  )
}

export default Footer