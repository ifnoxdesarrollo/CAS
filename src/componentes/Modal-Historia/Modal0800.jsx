import React, { useState } from 'react';
import './Modal.css'

const Modal0800 = () => {

    const [modal,setModalStyle] = useState (true);

    const toggleModal = () => {
        setModal(!modal);
      };
    
      if (modal) {
        document.body.classList.add('modal-activo')
      } else {
        document.body.classList.remove('modal-activo')
      }


    return(
        
        <>
        <div>Hola mundo</div>
        {/* {modal && (<div className='popup'>
        <div onClick={toggleModal} className='overlay'></div>
        <div className='modal-caja-contenido'>
          <div className="modal-contenido">
            <h2 className="modal-titulo"> 0800 </h2>
            <img className='modal-imagen' src="../imagenes/persona-nerviosa-popup.png" alt="persona nerviosa agarrando sus manos" />
            <p className="modal-parrafo">PRUEBA DE MODAL</p>
            <a href="#tarjeta-prevencion" className='modal-cerrar' onClick={toggleModal}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg></a>
          </div>
        </div>
      </div>)} */}
        </>
        
    )
}

export { Modal0800 }