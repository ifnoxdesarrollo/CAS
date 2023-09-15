import React from 'react';
import './VyC.css';

function VyC() {
  return (
    <div id='Voluntariado' className='vyc'>
      <div class="vyc-seccion">
        <div class="vyc_voluntariado">
          <h3 className='titulo-vyc'>Voluntariado</h3>
          <p className='parrafo'>Anualmente el Centro de Asistencia al Suicida y Atención en Crisis realiza su convocatoria a aspirantes a voluntarios para la atención telefónica. Este servicio se nutre año a año, de personas debidamente capacitadas, que generosa y anónimamente, en turnos de dos horas una vez por semana, realizan su tarea.</p>
        </div>
        <div class="vyc_capacitacion">
          <h3 className='titulo-vyc'>Capacitación</h3>
          <p className='parrafo parrafo-1'>La capacitación de los mismos es teórico-práctica, profundizando sobre el vínculo entre consultante y voluntario operador, hecho que constituye la base de nuestra actividad.</p>
          <p className='parrafo'> El curso de aspirantes a voluntarios tiene una duración de 3 meses de contenidos teóricos, asistiendo 2 horas por semana, para luego continuar con un tutor/a hasta que el voluntario se sienta preparado para atender su primer llamado, otorgándoles un andamiaje cuidadoso para procurar no solo la buena atención del consultante, sino también la salud mental, seguridad y confianza al operador voluntario.</p>
          <div className="vyc_boton">
            <button className='boton boton-blanco'>Quiero ayudar</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default VyC