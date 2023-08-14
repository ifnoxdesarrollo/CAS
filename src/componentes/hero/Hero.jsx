import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="container">
      <h3 className='org'>Organizacion sin fines de lucro</h3>
      <h1 id="titulo-principal">Centro de Asistencia al Suicida</h1>
      <h3 id="titulo-secundario">y Atención en Crisis</h3>
      <div className="d-flex flex-column container">
        <h3 className='fs-4'>Atención únicamente Telefonica</h3>
        <a className='my-2 btn btn-lg boton-hero' href='#'>
          Llamar 0800
        </a>
        <a className='mb-1 btn btn-lg boton-hero' href='#'>
          Llamar por Whatsapp
        </a>
        <h4 className='fs-5'>Llamadas con costo</h4>
      </div>
    </div>
  )
}

export default Hero