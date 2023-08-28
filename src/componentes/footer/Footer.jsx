import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='text-center footer'>
      <div className="d-flex container footer-contenedor">
        <h4 className='footer-texto ms-2'>Políticas de privacidad</h4>
        <h4 className='footer-texto ms-3'>Términos del Servicio</h4>
      </div>
      <h4 className='footer-texto mb-5'>© 2023 CAS. Todos los Derechos Reservados.</h4>
    </div>
  )
}

export default Footer