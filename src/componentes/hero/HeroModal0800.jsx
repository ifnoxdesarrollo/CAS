import React, { useState } from 'react'
import './Hero.css'

function HeroModal0800(props) {

    const [modal, setModal] = useState(false);
    const dispararModal = () => {
        setModal(!modal);
    }


    return (
        <>

            {props.hayAtencionWsp == false && props.hayAtencion0800 == true ? <>
                <div className="contenedor__botones">
                    <a href={props.content2}>
                        <button className='hero__contenedor__botones__boton-2' onClick={() => dispararModal()}>Llamar 0800</button>
                    </a>
                    <a href={props.content}>
                        <button className="hero__contenedor__botones__boton-1" onClick={() => dispararModal()}>Llamar por Whatsapp</button>
                    </a>
                </div> </>
                :
                <></>
            }

            {modal &&
                <>
                    <div className='popup'>
                        <div className='modal-caja-contenido'>
                            <div className="modal-contenido">
                                <h3 className="modal-titulo">Por wsp no, por 0800</h3>
                                <a href="#tarjeta-prevencion" className='modal-cerrar' ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default HeroModal0800