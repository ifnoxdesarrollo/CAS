import React from 'react'
import ItemVyC from './ItemVyC'

function VyC() {
  return (
    <div className='container text-center vyc'>
      <ItemVyC titulo={"Voluntariado"} parrafo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} textoBoton={"Quiero Ayudar"}></ItemVyC>
      <ItemVyC titulo={"Capacitación"} parrafo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} textoBoton={"Leer más"}></ItemVyC>
    </div>
  )
}

export default VyC