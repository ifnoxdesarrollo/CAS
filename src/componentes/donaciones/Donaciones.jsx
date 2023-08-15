import React from 'react'

function Donaciones() {
  return (
    <div className="mt-5 container text-center">
      <h2 className='titulo-h2 my-3'>
        Donaciones
      </h2>
      <h3 className='parrafo text-center'>
        Duis aute irure dolor in reprehenderit in voluptate velit.
      </h3>
      <div className="btn boton-blanco fs-4 fw-bold mt-4 rounded-3">
        Donacion individual
      </div>
      <div className="btn boton-blanco fs-4 fw-bold my-3 rounded-3">
        Donacion mensual
      </div>
    </div>
  )
}

export default Donaciones