import React, {useState} from 'react'
import './Encabezado.css'

function Encabezado() {

  const [colorNav, setColorNav] = useState (false);
  const changeColorNav = () => {
    if (window.scrollY >= 780) {
      setColorNav (true)
    } else {
      setColorNav (false)
    }
  }
  window.addEventListener('scroll', changeColorNav)



  return (
    <>
      <header id='Header' className={colorNav ? 'header-seccion header-seccion-scroll' : 'header-seccion'}>
                  <nav class="navbar navbar-expand-md navbar-color">
                    <div class="container-fluid">
                          <a class="navbar-brand" href="#">CAS Mza</a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                              <div class="offcanvas-header">
                                <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                              </div>
                              <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                  <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Historia del CAS</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#Faqs">Preguntas frecuentes</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#Voluntariado">Voluntariado</a>
                                  </li>
                                  
                                </ul>
                              </div>
                          </div>
                    </div>
                </nav>
      </header>
    </>
  )
}

export default Encabezado