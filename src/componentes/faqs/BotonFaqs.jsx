import React, { useState } from 'react'
import './BotonFaqs.css'

function BotonFaqs() {
  const [iconClass, setIconClass] = useState("bi bi-chevron-down");
  const [showButton, setshowButton] = useState("show-button");

  const onOpenButton = () => {
    if (iconClass === "bi bi-chevron-up") {
      setIconClass("bi bi-chevron-down");
      setshowButton("show-button");
    } else {
      setshowButton("hide-button");
      setIconClass("bi bi-chevron-up");
    }
  };

  return (
    <div className="contenedor-faqs">
      <div
        className="btn boton d-flex text-center"
        onClick={onOpenButton}
      >
        <div className="pregunta mx-auto">Pregunta??? </div>
        <i className={iconClass + " arrow-icon"}></i>
      </div>
      <div className={"mb-4 " + showButton}>
        <div className="respuesta">Respuesta: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quaerat nulla deserunt nihil itaque iure quae, id, nemo culpa aliquid magnam facilis fugiat fuga fugit ducimus voluptas at impedit illum?</div>
      </div>
    </div>
  )
}

export default BotonFaqs