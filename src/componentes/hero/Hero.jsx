import React from 'react'
import './Hero.css'

function Hero() {
  return (

    <div className="hero">
      <div className="hero__contenedor">
        <div className="hero__contenedor__encabezado">
          <h3 className='hero__contenedor__encabezado__titulo-1'>Organizacion sin Fines de Lucro</h3>
          <h1 className='hero__contenedor__encabezado__titulo-2'>Centro de Asistencia al Suicida</h1>
          <h3 className='hero__contenedor__encabezado__titulo-3'>y Atención en Crisis</h3>
        </div>
        <div className="hero__contenedor__botones">
          <h3 className='hero__contenedor__botones__titulo-1'>Atención únicamente Telefónica</h3>
          <a href='#'>
            <button className='btn btn-lg hero__contenedor__botones__boton-1'>Llamar 0800</button>
          </a>
          <a href='#'>
            <button className='btn btn-lg hero__contenedor__botones__boton-2'>Llamar por Whatsapp</button>
          </a>
          <h3 className='hero__contenedor__botones__titulo-2'>Llamadas con costo</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero