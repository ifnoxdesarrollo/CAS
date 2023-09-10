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
      <header className={colorNav ? 'header-seccion header-seccion-scroll' : 'header-seccion'}>
          {/* <a className="header-logo" href="#">CAS Mza</a>
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
          </nav> */}

          <nav className='navbar navbar-expand-md'>
            <div className='container-fluid'>
              {/* Logo*/}
              <a className='navbar-brand' href="#">CAS Mza</a>

              {/* boton hamburguesa*/}
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button> 

              {/* elementos del menu colapsable*/}
              <div className="collapse navbar-collapse" id='menu'>
                 <ul className='navbar-nav me-auto'>
                  <li className='nav-item'><a href=""></a>Historia del CAS</li>
                  <li className='nav-item'><a href="">Preguntas frecuentes</a></li>
                  <li className='nav-item'><a href="">Voluntariado</a></li>
                 </ul>

              </div>


            </div>

          </nav>
          

      </header>
    
    
    </>
  )
}

export default Encabezado