import React from 'react'

function Botones(props) {
    return (
        <>
            {props.hayAtencionWsp == true && props.hayAtencion0800 == true ? <>
                <div className="contenedor__botones">
                    <a href={content2}>
                        <button className='hero__contenedor__botones__boton-2' onClick={() => dispararModal()}>Llamar 0800</button>
                    </a>
                    <a href={content}>
                        <button className="hero__contenedor__botones__boton-1" onClick={() => dispararModal()}>Llamar por Whatsapp</button>
                    </a>
                </div> </>
                :
                <></>
            }
        </>
    )
}

export default Botones