import React from 'react'
import ItemVyC from './ItemVyC'

function VyC() {
  return (
    <div className='vyc'>
      <ItemVyC titulo={"Voluntariado"} parrafo={"Anualmente el Centro de Atención al Suicida y atención en crisis realiza su convocatoria a aspirantes a voluntarios para la atención telefónica"} textoBoton={"Quiero Ayudar"}></ItemVyC>
      <ItemVyC titulo={"Capacitación"} parrafo={"Es teórico-práctico, profundizando sobre el vínculo entre consultante y voluntario operador, hecho que constituye la base de nuestra actividad."} textoBoton={"Leer más"}></ItemVyC>
    </div>
  )
}

export default VyC