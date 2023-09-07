import React from 'react';
import './modal-prevencion.css';

const ModalPrevencion = () => {

    return(
        <>
            <div className='modal'>
                <div onClick={toggleModal} className='overlay'></div>
                    <div className="modal-content">
                        <h2 className="modal-titulo"></h2>
                        <p className="modal-parrafo"></p>
                        <button className='modal-cerrar' onClick={toggleModal}>Cerrar</button>
                    </div>
            </div>
        </>
    )
}

export { ModalPrevencion }