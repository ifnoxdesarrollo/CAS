import React from 'react'
import PrevencionItem from './PrevencionItem'
import './Prevencion.css';

function Prevencion() {
  return (
    <div className='prevencion'>
      <div className='caja-elementos'>
          <div>
            <h2 className='titulo-h2'>Prevención del suicidio</h2>
          </div>
          <div className='caja-items'>
              <PrevencionItem className='caja-item'></PrevencionItem>
          </div>
      </div>
    </div>
  )
}

export default Prevencion