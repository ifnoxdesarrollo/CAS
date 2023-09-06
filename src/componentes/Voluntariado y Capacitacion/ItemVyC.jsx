/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './VyC.css';

function ItemVyC(props) {
  return (
    <>
      <h2 className='titulo-vyc mb-3 mt-5'>
        {props.titulo}
      </h2>
      <h3 className='parrafo'>
        {props.parrafo}
      </h3>
      <div className="btn boton-blanco fs-5 fs-sm-4 fw-bold rounded-3">
        {props.textoBoton}
      </div>
    </>
  )
}

export default ItemVyC