import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='text-center footer'>
      <div className="footer-contenedor">
        <h4 className='footer-texto-1 ms-2'>Políticas de privacidad</h4>
        <h4 className='footer-texto-2 ms-3'>Términos del Servicio</h4>
      </div>
      <h4 className='footer-texto-3 mb-5'>© 2023 CAS. Todos los Derechos Reservados.</h4>
    </div>
  )
}

export default Footer