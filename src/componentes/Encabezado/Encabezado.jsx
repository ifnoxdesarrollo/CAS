import React from 'react'
import './Encabezado.css'

function Encabezado() {
  return (
    <>
      <header className="header-seccion">
          <nav className='navbar-seccion'>
                <div className='navbar-seccion-menu'>
                    <li className='navbar-secciones-item'><a href=""></a>Historia del CAS</li>
                    <li className='navbar-secciones-item'><a href=""></a>Preguntas frecuentes</li>
                    <li className='navbar-secciones-item'><a href=""></a>Voluntariado</li>
                </div>
          
                <div className="container-fluid">
                  <button className="ms-3 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>       
                </div>
          </nav>

          <a className="navbar-brand me-4 header-logo" href="#">CAS</a>

      </header>
    
    
    </>
  )
}

export default Encabezado