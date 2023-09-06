/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './VyC.css';

function ItemVyC(props) {
  return (
    <>
      <h2 className='titulo-vyc'>
        {props.titulo}
      </h2>
      <h3 className='parrafo'>
        {props.parrafo}
      </h3>
      <div className="boton boton-blanco">
        {props.textoBoton}
      </div>
    </>
  )
}

export default ItemVyC