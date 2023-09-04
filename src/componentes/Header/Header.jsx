import React from 'react'
import './Header.css'

function Header () {
  return (
    <nav className="caja-seccion">

      <div className='navbar-secciones'>
          <div>
              <li className='navbar-secciones-item'><a href=""></a>Historia del CAS</li>
              <li><a href=""></a>Preguntas Frecuentes</li>
              <li><a href=""></a>Voluntariado</li>

          </div>
     
          <div className="container-fluid">
            <button className="ms-3 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand me-4" href="#">CAS</a>        
          </div>
     
      </div>

    </nav>
  )
}

export default Header