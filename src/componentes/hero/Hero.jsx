import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="contenedor">
      <div className="contenedor-elementos">
        <h3 className='org hero-text'>Organizacion sin Fines de Lucro</h3>
        <h1 id="titulo-principal">Centro de Asistencia al Suicida</h1>
        <h3 id="titulo-secundario">y Atención en Crisis</h3>
        <div className="d-flex flex-column">
          <div className="botones">
            <h3 className='hero-text'>Atención únicamente Telefónica</h3>
            <a className='my-2 btn btn-lg boton' href='#'>
              Llamar 0800
            </a>
            <a className='mb-2 mt-1 btn btn-lg boton' href='#'>
              Llamar por Whatsapp
            </a>
            <h4 className='hero-text'>Llamadas con costo</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero