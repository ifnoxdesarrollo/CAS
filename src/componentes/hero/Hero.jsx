import React from 'react'
import './Hero.css'

function Hero() {
  return (

    <div className="hero">
      <div className="hero__contenedor">
        <div className="hero__contenedor__encabezado">
          <h1 className='hero__contenedor__encabezado__titulo-1'>Centro de <br />Asistencia al <br />Suicida</h1>
          <h3 className='hero__contenedor__encabezado__titulo-2'>y Atención en Crisis</h3>
          <h3 className='hero__contenedor__encabezado__titulo-3'>Organización sin fines de lucro</h3>
        </div>

        <div className="hero__contenedor__botones">
            <h3 className='hero__contenedor__botones__titulo-1'>Atención únicamente telefónica</h3>
            <div className='contenedor__botones'>
              <a href='#'>
                <button className='boton hero__contenedor__botones__boton-1'>Llamar al 0-800</button>
              </a>
              <a href='#'>
                <button className='boton boton--verde hero__contenedor__botones__boton-2'>Llamar por Whatsapp</button>
              </a>

            </div>
            <h3 className='hero__contenedor__botones__titulo-2'>Llamadas con costo</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero