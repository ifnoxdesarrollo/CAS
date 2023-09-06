import React from 'react'
import BotonFaqs from './BotonFaqs'
import './Faqs.css'

function Faqs() {
  return (
    <div className='caja-seccion'>
      <div className='caja-elementos-faqs'>
          <h2 className='titulo-h2'>Preguntas Frecuentes</h2>
          
        <div class="accordion accordion-flush" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  ¿Qué costo tiene llamar al CAS?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Llamar al <strong>0-800-8000-135</strong> tiene el valor d aun llamada a un teléfono fijo, es decir, si se llama desde un teléfono celular, la llamada tiene costo de aire del servicio de la compañía telefónica.
                    <br />
                    <br />
                    La llamada al 0-800 es gratuita si la hacemos desde un teléfono fijo. Como la gran mayoría de la población se comunica, actualmente, por teléfono móvil, hemos habilitado	 el servicio de llamadas por WhatsApp, para que las mismas san completamente <strong>GRATUITAS</strong> y accesibles a mayor cantidad de personas.  
                  </div>
                </div>
              </div>
<br />
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      ¿Cómo es la atención por WhatsApp?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      Para brindar una mejor calidad de servicio, la atención por WhatsApp, es ÚNICAMENTE por llamada telefónica, es decir, no realizamos atención por Chat ni por videollamada. 
                      <br />
                      <br />
                      Si nos escribes dentro ó fuera del horario de atención, recibirás una respuesta automática invitándote a llamarnos. 
                  </div>
                </div>
              </div>
<br />
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      ¿Quién contesta la llamada?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      Las llamadas son atendidas por personas voluntarias que han recibido una capacitación específica para realizar esta tarea. Es decir, son operadores con intención de escucha activa y amorosa, con muchas ganas de ayudarte. 
                      <br />
                      <br />
                      Cabe aclarar, entonces, que no son profesionales de la salud mental exclusivamente y, además, brindan su servicio por tan solo la gratificación de ser útil, ad honorem.  
                  </div>
                </div>
              </div>
<br />
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      ¿En qué horario puedo llamar?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      Puedes ver nuestros horarios actualizados en nuestra página web, Facebook e Instagram institucional. Atendemos los 365 días del año, estor horarios van variando de acuerdo a la disponibilidad	de nuestros voluntarios. A medida que se sumen más voluntarios, podremos ampliar nuestros horarios de atención. 
                  </div>
                </div>
              </div>
<br />
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      ¿Cómo puedo ser voluntario/a?
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      Hacemos una convocatoria anual para reclutar voluntarios, en la cual los aspirantes son evaluados por las psicólogas de nuestro equipo, para asegurarnos que dan con el perfil de voluntario buscado, procurando que la actividad sea saludable para los operadores y los consultantes. 
                      <br />
                      <br />
                      Siempre publicamos la convocatoria en nuestras redes, con anticipación para que puedas participar.  
                  </div>
                </div>
              </div>
<br />
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      ¿Cuáles son los teléfonos habilitados?
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      Tenemos horario de oficina, en donde contamos con nuestro teléfono fijo 0-800 y teléfono móvil para llamadas de WhatsApp, horarios de guardia y horarios especiales desde teléfonos móviles para días festivos, fines de semana, etcétera. Todos están especificados por día y horario en nuestros horarios institucionales. Estos son:
                      <br />
                      <strong>Oficina: </strong>
                      <br />
                      - 0 800 8000 315 (gratuito llamando desde teléfono fijo, sino consume tiempo de aire)
                      - 135 (llamando desde la línea Claro, si llamas desde otra línea, te comunicarás con el CAS de Buenos Aires ó Córdoba)
                      - (+54 9) 261 557 03 14 para llamadas de WhatsApp en horario de oficina.
                      <br />
                      <strong>Guardia y horarios especiales: </strong>
                      <br />
                      - Guardia fines de semana y festivos: (+54 9) 2622 540 949 para llamadas móviles comunes y de WhatsApp.
                      - Horarios especiales: (+54 9) 261 605 89 14 para llamadas móviles comunes y de WhatsApp.
                  </div>
                </div>
              </div>

        </div>

      </div>
    </div>
  )
}

export default Faqs