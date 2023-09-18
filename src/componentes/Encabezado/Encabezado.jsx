import React, { useState } from "react";
import "./Encabezado.css";

function Encabezado() {
  const [colorNav, setColorNav] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState (false);
  
  const changeColorNav = () => {
    if (window.scrollY >= 780) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };
  window.addEventListener("scroll", changeColorNav);

  
  function toggleMenu () {
    setMenuAbierto(!menuAbierto);
  } 

  return (
    <>
      <header
        id="Header"
        className={
          colorNav ? "header-seccion header-seccion-scroll" : "header-seccion"
        }
      >
        <nav className="navbar-seccion">
          <a href="#" className="logo">
            CAS Mza
          </a>
          <button className="open-menu" aria-label="Abrir menú" onClick={toggleMenu}>
              <svg
                className="menu-hamb"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
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
          <ul className={menuAbierto ? 'menu menu_abierto' : 'menu'}>
            <button className="close-menu" aria-label="Cerrar menú" onClick={toggleMenu}>
              <svg
                className="cerrar-icono"
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            <li onClick={toggleMenu}>
              <a href="#">Historia del CAS</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#Faqs">Preguntas frecuentes</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#Voluntariado">Voluntariado</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Encabezado;
