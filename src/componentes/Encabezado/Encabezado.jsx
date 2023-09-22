import React, { useState } from "react";
import "./Encabezado2.css";

function Encabezado() {
  const [colorNav, setColorNav] = useState(false);
  const [abrirMenu, setAbrirMenu] = useState(false);


  const changeColorNav = () => {
    if (window.scrollY >= 780) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };
  window.addEventListener("scroll", changeColorNav);


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>

      <nav class="navbar navbar-expand-lg  nav">
        <div class="container-fluid contenedor-nav">
          <a class="navbar-brand marca" href="#">CAS Mendoza</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link links" href="#Faqs">Preguntas Frecuentes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link links" href="#Voluntariado">Voluntariado</a>
              </li>
              <li class="nav-item">
                <a class="nav-link links" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <header
        id="Header"
        className={
          colorNav ? "header-seccion header-seccion-scroll" : "header-seccion"
        }
      >
        <nav className="navbar-seccion">
          <a href="#" className="logo">
            CAS Mendoza
          </a>
          <button onClick={menuAbrir} className="open-menu" aria-label="Abrir menú">
            <svg
              className="menu-hamb"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          {abrirMenu ? <>
            <ul className="menu">
              <button onClick={menuAbrir} className="close-menu" aria-label="Cerrar menú">
                <svg
                  className="cerrar-icono"
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
              <li>
                <a href="#Faqs">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#Voluntariado">Voluntariado</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </> : <></>}
        </nav>
      </header> */}


    </>
  );
}

export default Encabezado;
