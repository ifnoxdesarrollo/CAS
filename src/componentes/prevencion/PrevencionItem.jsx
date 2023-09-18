import React, { useState } from 'react'
import './PrevencionItem.css';

function PrevencionItem() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('modal-activo')
  } else {
    document.body.classList.remove('modal-activo')
  }

  return (
    <>
      <div className='tarjeta' id='tarjeta-prevencion'>
        <img className='prevencion-img' src='../imagenes/persona-nerviosa.png' alt='persona nerviosa agarrando sus manos'></img>
        <h3 className='titulo-imagen'>Unidos por la vida:</h3>
        <p className='parrafo-imagen'>Prevención del suicidio y construcción de la
          <br className='br-prevencion' /> esperanza</p>
        <button className='btn btn-lg boton-prev boton--rojo' onClick={toggleModal}>Leer más</button>
      </div>

      {modal && (<div className='popup'>
        <div onClick={toggleModal} className='overlay'></div>
        <div className='modal-caja-contenido'>
          <div className="modal-contenido">
            <h2 className="modal-titulo">Unidos por la vida:
              <br />Prevención del suicidio y Construcción de la esperanza</h2>
            <img className='modal-imagen' src="../imagenes/persona-nerviosa-popup.png" alt="persona nerviosa agarrando sus manos" />
            <p className="modal-parrafo">En un mundo donde la salud mental se está convirtiendo en un tema cada vez más urgente de ser abordado, la prevención del suicidio adquiere un significado aún más profundo. El Cas Mendoza es una ONG comprometida con el bienestar emocional y la prevención del suicidio, estamos dedicados a tender un oído amoroso y brindar luz en uno de los momentos más oscuros por los que puede pasar una persona.
              <br />
              <br />
              En esta nota, exploraremos la importancia de la prevención del suicidio, los factores de riesgo, las formas de apoyo y cómo cada uno de nosotros puede marcar una diferencia tangible en la vida de quienes luchan internamente.
              <br />
              <br />
              La Importancia de la Prevención del Suicidio
              <br />
              <br />
              La prevención del suicidio es mucho más que una simple campaña. Es un llamado a la acción colectiva para crear un mundo donde cada individuo se sienta valorado, apoyado y comprendido. La estigmatización que rodea la salud mental y el suicidio puede ser un obstáculo para que las personas busquen ayuda. Nuestra ONG trabaja incansablemente para desterrar este estigma y abrir un diálogo honesto que pueda salvar vidas.
              <br />
              <br />
              Factores de Riesgo y Señales de Alerta: Comprender los factores de riesgo y las señales de alerta es fundamental en la prevención del suicidio. Los cambios drásticos en el comportamiento, el estado de ánimo y las relaciones interpersonales pueden ser indicativos de angustia emocional. Expresiones de desesperanza, aislamiento social y un interés persistente en la muerte también deben tomarse en serio. Al educarnos sobre estas señales, podemos intervenir a tiempo y brindar apoyo.
              <br />
              <br />
              Formas de Ayudar: El apoyo es un pilar clave en la prevención del suicidio. Cada uno de nosotros puede desempeñar un papel vital al brindar compasión, empatía y una escucha activa. Hablar abiertamente sobre la salud mental y el suicidio elimina el estigma y fomenta un ambiente donde las personas se sientan cómodas al compartir sus luchas. No subestimemos el poder de un simple gesto de amabilidad, un mensaje de aliento o un abrazo sincero.
              <br />
              <br />
              La importancia de las redes: La prevención del suicidio no es una tarea individual, sino un esfuerzo comunitario. Las familias, amigos, educadores, líderes religiosos y profesionales de la salud tienen la responsabilidad de identificar y apoyar a quienes necesitan ayuda. La comunicación abierta y la disposición a escuchar son esenciales para construir una red de apoyo sólida.
              <br />
              <br />
              Recursos Profesionales y Líneas de Ayuda: Además de la ayuda brindada por la comunidad, es  crucial conectar a las personas con recursos profesionales. Los terapeutas, psicólogos y profesionales especializados en salud mental están capacitados para ofrecer orientación y terapia. Las líneas de ayuda, como la nuestra (0 800 8000 135), también juegan un papel vital al proporcionar un espacio confidencial para conversar con profesionales entrenados en la prevención del suicidio.
              <br />
              <br />
              Promoviendo la Resiliencia y el Autocuidado: La resiliencia es la capacidad de enfrentar desafíos y recuperarse de ellos. Promover la resiliencia implica fomentar habilidades para lidiar con el estrés y las adversidades. Practicar el autocuidado es una parte integral de este proceso. Alimentar una dieta equilibrada, mantenerse activo físicamente y adoptar técnicas de relajación pueden mejorar la salud mental y emocional.
              <br />
              <br />
              La prevención del suicidio es un llamado a la empatía, la compasión y la acción colectiva. Como una ONG comprometida con la vida y el bienestar emocional, estamos aquí para extender una mano amiga a aquellos que luchan internamente. A través del apoyo, la educación y la conciencia, podemos construir un mundo donde cada individuo sienta que su vida importa y donde el mensaje de esperanza prevalezca sobre la desesperación.
              <br />
              <br />
              Juntos, estamos unidos por la vida y dedicados a prevenir el suicidio.
              <br />
              <br />
              <strong>#UnidosPorLaVida #PrevenciónDelSuicidio #SaludMental #ApoyoEmocional</strong></p>

            {/* <button className='modal-cerrar' onClick={toggleModal}>Cerrar</button> */}
            <a href="#tarjeta-prevencion" className='modal-cerrar' onClick={toggleModal}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg></a>
          </div>
        </div>
      </div>)}

    </>
  )
}

export default PrevencionItem