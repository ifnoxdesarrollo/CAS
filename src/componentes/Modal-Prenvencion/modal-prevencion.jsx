import React from 'react';
import './modal-prevencion.css';

const ModalPrevencion = () => {

const [modal,setModal] = useState (false);
    
const toggleModal = () => {
            setModal(!modal);
}

    return(
        <>
            {
                modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className='overlay'>
                        </div>
                        <div className="modal-content">
                            <h2 className="modal-titulo"></h2>
                            <p className="modal-parrafo"></p>
                            <button className='modal-cerrar' onClick={toggleModal}>Cerrar</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export { ModalPrevencion }